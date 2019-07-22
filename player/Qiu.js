import {Spirit} from "../js/base/Spirit.js";
import {DataStore} from "../js/base/DataStore.js";

export class Qiu extends Spirit{
    constructor(){
        super(DataStore.getInstance().res.get('qiu'));
        this.speedx = 0;
        this.speedy = 0;
        //s用来控制设置小球按照哪个绘制方法画
        this.s = false;

        //小球的速度常量
        this.countX = 10;
        this.countY = 8;
    }

    draw(){

        let ban = DataStore.getInstance().get('ban');

            DataStore.getInstance().ctx.drawImage(
                this.image,
                0,
                0,
                this.image.width,
                this.image.height,
                this.x = ban.x + ban.width/2 - this.image.width/2,
                this.y = ban.y -  this.image.height,
                this.image.width,
                this.image.height

            );

    }

    draw1(){
         if(this.x >= window.innerWidth){
             this.speedx= -this.countX;
         }
         if(this.y <= 0){
             this.speedy = this.countY;
         }
        if(this.x<=0){
            this.speedx = this.countX;
        }
        DataStore.getInstance().ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height,
            this.x = DataStore.getInstance().get('qiu').x + this.speedx,
            this.y = DataStore.getInstance().get('qiu').y + this.speedy,
            this.image.width,
            this.image.height
        );

     }

     click(){
         this.speedx = this.countX;
         this.speedy = -this.countY;
     }
}
