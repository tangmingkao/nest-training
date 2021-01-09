import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
const xlsx = require('node-xlsx');
const fs = require('fs');
import 'dotenv/config';

@Injectable()
export class GetformService {
    private readonly logger = new Logger(GetformService.name);
    async getform() {
        this.logger.log(`------start----`);
        const url = `http://quotes.money.163.com/f10/zycwzb_600519.html#01c01`;
        const res = await axios.get(url);
        this.logger.log(`抢购链接为${res}`);
        const $ = cheerio.load(res.data);
        let tdStr = $('.col_r .table_bg001  tbody tr:nth-child(12)').html()
        let reg = /<td[\S\s]*?>([\S\s]*?)<\/td>/gi;
        this.logger.log(`抢购链接为${tdStr}`);
        let result = [];
        let a
        while ((a = reg.exec(tdStr)) != null) {
            result.push(a[1].replace('\n', ''));
        }
        let datas = []
        let title = ['净利润(扣除非经常性损益后)(万元)']

        datas = [title, result]
        this.writeExcel(title[0], datas);
        return;
    }
    writeExcel(name, data) {
        var buffer = xlsx.build([{ name: 'sheet1', data: data }]);
        fs.writeFileSync(name + '.xlsx', buffer, { 'flag': 'w' });
    }
}