import {DataStore} from "./base/DataStore.js";
import {Rectangle} from "./base/Rectangle.js";
import {Zhuan} from "../player/Zhuan.js";


export class Director {
    constructor() {
        this.dataStore = DataStore.getInstance();

    }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }

        return Director.instance;
    }

    //球和板碰撞的方法
    crashQiu() {
        const qiu = this.dataStore.get('qiu');
        const ban = this.dataStore.get('ban');
        const qiuRect = new Rectangle(qiu.x, qiu.y, qiu.width, qiu.height);
        const banRect = new Rectangle(ban.x, ban.y, ban.width, ban.height);
        if (qiuRect.intersects(banRect)) {

            if( ban.x + 16 <= qiu.x && qiu.x <=  ban.x + 32 ){
                qiu.speedx = - qiu.countX - 4;
                qiu.speedy = -qiu.countY ;
            }
            if( ban.x  <= qiu.x && qiu.x < ban.x + 16){
                qiu.speedx = - qiu.countX - 2;
                qiu.speedy = -qiu.countY;
            }
            if ( ban.x + 32<= qiu.x && qiu.x <= ban.x + 48) {
                qiu.speedx = - qiu.countX;
                qiu.speedy = -qiu.countY;
            }

            if ( (ban.x + 48) <= qiu.x && qiu.x<= ban . x + 64 ) {
                qiu.speedx = qiu.countX;
                qiu.speedy = -qiu.countY;
            }
            if(  64 + ban.x  <= qiu.x && qiu.x <= ban.x  + 80 ){
                qiu.speedx = qiu.countX + 3;
                qiu.speedy = -qiu.countY  ;
            }
            if(  80 + ban.x <= qiu.x && qiu.x <= ban.x + 96){
                qiu.speedx = qiu.countX + 5;
                qiu.speedy = -qiu.countY ;
            }

          /*  else {
                qiu.speedx = qiu.countX;
                qiu.speedy = -qiu.countY;
            }*/
        }
    }

    //创建多个砖块
    creatZhuan() {
        let arr = DataStore.getInstance().get('zhuans')

        for (let i = 0; i < 49; i++) {
            arr.push(new Zhuan());
        }
    }

    end() {
        if (DataStore.getInstance().get('qiu').y > window.innerHeight) {
            this.isGameover = true;
        }
    }


    run() {
        if (!this.isGameover) {


            this.dataStore.get('background').draw();
            this.dataStore.get('ban').draw();
            this.creatZhuan();
            //循化画砖
            this.arr = [];
            const score = this.dataStore.get('score');

            for (let i = 0; i < 7; i++) {
                this.arr[i] = this.dataStore.get('zhuans')[i];

                this.arr[i].x = 16 + i * 50;

                this.arr[i].y = 10;

                //球砖碰撞的方法
                const qiu = this.dataStore.get('qiu');
                const qiuRect = new Rectangle(qiu.x, qiu.y, qiu.width, qiu.height);
                const arrRect = new Rectangle(this.arr[i].x, this.arr[i].y, 50, 20);

                //因为每次run都会生成新的坐标和矩形块，只是画不画的问题，实际是存在的，所以当这个div不画的时候
                //就不让它去判断是否会相撞了
                if (!this.arr[i].s) {
                    if (qiuRect.intersects(arrRect)) {
                        this.arr[i].s = true;
                        qiu.speedx = -qiu.speedx;
                        qiu.speedy = -qiu.speedy;
                        score.scoreNumber++;
                    }
                }
                //当块应该存在的时候再去画，不应该存在的时候不画
                if (!this.arr[i].s) {
                    this.arr[i].draw();
                }
            }
            for (let i = 7; i < 14; i++) {
                this.arr[i] = this.dataStore.get('zhuans')[i];

                if (!this.arr[i].s) {
                    this.arr[i].x = 16 + (i - 7) * 50;

                    this.arr[i].y = 30;
                }

                const qiu = this.dataStore.get('qiu');
                const qiuRect = new Rectangle(qiu.x, qiu.y, qiu.width, qiu.height);
                const arrRect = new Rectangle(this.arr[i].x, this.arr[i].y, 50, 20);
                if (!this.arr[i].s) {
                    if (qiuRect.intersects(arrRect)) {
                        this.arr[i].s = true;
                        qiu.speedx = -qiu.speedx;
                        qiu.speedy = -qiu.speedy;
                        score.scoreNumber++;
                    }
                }
                if (!this.arr[i].s) {
                    this.arr[i].draw();

                }
            }
            for (let i = 14; i < 21; i++) {
                this.arr[i] = this.dataStore.get('zhuans')[i];

                if (!this.arr[i].s) {
                    this.arr[i].x = 16 + (i - 14) * 50;

                    this.arr[i].y = 50;
                }

                const qiu = this.dataStore.get('qiu');
                const qiuRect = new Rectangle(qiu.x, qiu.y, qiu.width, qiu.height);
                const arrRect = new Rectangle(this.arr[i].x, this.arr[i].y, 50, 20);
                if (!this.arr[i].s) {
                    if (qiuRect.intersects(arrRect)) {
                        this.arr[i].s = true;
                        qiu.speedx = -qiu.speedx;
                        qiu.speedy = -qiu.speedy;
                        score.scoreNumber++;
                    }
                }
                if (!this.arr[i].s) {
                    this.arr[i].draw();

                }
            }
            for (let i = 21; i < 28; i++) {
                this.arr[i] = this.dataStore.get('zhuans')[i];

                if (!this.arr[i].s) {
                    this.arr[i].x = 16 + (i - 21) * 50;

                    this.arr[i].y = 70;
                }

                const qiu = this.dataStore.get('qiu');
                const qiuRect = new Rectangle(qiu.x, qiu.y, qiu.width, qiu.height);
                const arrRect = new Rectangle(this.arr[i].x, this.arr[i].y, 50, 20);
                if (!this.arr[i].s) {
                    if (qiuRect.intersects(arrRect)) {
                        this.arr[i].s = true;
                        qiu.speedx = -qiu.speedx;
                        qiu.speedy = -qiu.speedy;
                        score.scoreNumber++;
                    }
                }
                if (!this.arr[i].s) {
                    this.arr[i].draw();
                }
            }
            /* for (let zhuan of this.dataStore.get('zhuans')) {
                 zhuan.x = i*50;
                 zhuan.y = j*20;
                 zhuan.draw();
             }*/

            if (!this.dataStore.get('qiu').s) {
                this.dataStore.get('qiu').draw();
            } else {
                this.dataStore.get('qiu').draw1();

            }

            this.dataStore.get('score').draw();


            //检测小球和板碰撞
            this.crashQiu();

            this.end();

            //定时器
            let timer = requestAnimationFrame(() => {
                this.run();
            });
            this.dataStore.put('timer', timer);

        } else {
            cancelAnimationFrame(this.dataStore.get('timer'));
            //一定先画出gameover再关闭资源
            this.dataStore.get('gameover').draw();
            Director.getInstance().e = true;
            this.dataStore.destory();

        }


    }
}


