import { AwesomeQR } from "awesome-qr";
import * as fs from 'fs';


class Qr {

    static async create(url = '') {
        
        let logoImage = null;
        let colorDark = '#000000';
        let urlType = undefined;

        if( url.includes('facebook') ) {
            urlType = 'facebook';
            logoImage = `img/${urlType}.png`;
            colorDark = '#2c5cb4';
        } else if ( url.includes('youtube') ) {
            urlType = 'youtube';
            logoImage = `img/${urlType}.png`;
            colorDark = '#d5002c';
        } else if ( url.includes('instagram') ) {
            urlType = 'instagram';
            logoImage = `img/${urlType}.png`;
            colorDark = '#ff553e'; // linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)
        } else if ( url.includes('linkedin') ) {
            urlType = 'linkedin';
            logoImage = `img/${urlType}.png`;
            colorDark = '#0f4b9b';
        } else if ( url.includes('tiktok') ) {
            urlType = 'tiktok';
            logoImage = `img/${urlType}.png`;
            colorDark = '#000000';
        } else if ( url.includes('twitter') ) {
            urlType = 'twitter';
            logoImage = `img/${urlType}.png`;
            colorDark = '#1c84fe';
        } else if ( url.includes('.jpg') || url.includes('.png') ) {
            urlType = 'imagen';
            logoImage = `img/${urlType}.png`;
            colorDark = '#08105e';
        } else if ( url.includes('.mp4') || url.includes('.mov') || url.includes('.avi') || url.includes('.wmv') ) {
            urlType = 'video';
            logoImage = `img/${urlType}.png`;
            colorDark = '#dbe9ee';
        } else if ( url.includes('.pdf') ) {
            urlType = 'pdf';
            logoImage = `img/${urlType}.png`;
            colorDark = '#dc4955';
        }

        const buffer = await new AwesomeQR({
            text: url,
            size: 500,
            colorDark,
            logoImage
          }).draw();
      
        fs.writeFileSync("qr/qrcode.png", buffer);
    }

}

export default Qr;