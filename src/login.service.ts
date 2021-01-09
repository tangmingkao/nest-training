import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { defaultUa } from './ua';
import * as fs from 'fs';
import { randomRange } from './utils';
import * as shell from 'shelljs';
import * as path from 'path';
const cookiePath = path.resolve(__dirname, '../', 'maotai.cookie');
const qrcodePath = path.resolve(__dirname, '../', 'qrcode.png');
console.log(__dirname);
console.log(qrcodePath);

interface CookieData{
    cookie: string[];
    ua: string;
}

@Injectable()
export class LoginService{
    private readonly logger = new Logger(LoginService.name);
    cookies: string[];
    islogin: boolean;
    ua: string = defaultUa;
    
    /**
     * cookie判断
     * @return {*}
     * @memberof LoginService
    */
    async init(){
        const isExist = fs.existsSync(cookiePath);
        if (isExist) {
          const data = this.getCookieFromLocal();
          this.cookies = data.cookie;
        } else {
          this.logger.log('未找到cookie文件');
        }
    }
    /**
     *
     * 从本地获取cookie
     * @return {*}
     * @memberof LoginService
    */
    getCookieFromLocal() {
        const cookie = fs.readFileSync(cookiePath).toString();
        const data: CookieData = JSON.parse(cookie);
        return data;
    }




}
