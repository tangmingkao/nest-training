import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
const xlsx = require('node-xlsx');
const fs = require('fs');

@Injectable()
export class getformService {
    private readonly logger = new Logger(getformService.name);
    async getform() {
        const url = `http://quotes.money.163.com/f10/zycwzb_600519.html#01c01`;
        axios.get(url).then(res => {
            const $ = cheerio.load(res.data);
            let tdStr = $('.col_r .table_bg001  tbody tr:nth-child(12)').html()
            let reg = /<td[\S\s]*?>([\S\s]*?)<\/td>/gi;
            let result = [];
            console.log(tdStr)
        }).catch(err => {
            this.logger.log('请求网页错误');
        });

    }
}