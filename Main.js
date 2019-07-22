import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {DataStore} from "./js/base/DataStore.js";
import {Background} from "./js/runtime/Background.js";
import {Director} from "./js/Director.js";
import {Ban} from "./player/Ban.js";
import {Qiu} from "./player/Qiu.js";
import {Over} from "./js/runtime/Over.js";
import {Score} from "./js/runtime/Score.js";
export class Main {
    constructor() {
        this.canvas = document.getElementById('c');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = new ResourceLoader();
        loader.onLoaded((map) => {
            this.onFirstLoaded(map)
        });
    }

    onFirstLoaded(map) {
        this.dataStore.res = map;
        this.dataStore.ctx = this.ctx;
        this.registerEvent();
        this.registerEventOne();
        this.registerEventTwo();
        this.init();
    }




    init() {

        this.dataStore.put('ban', new Ban());
        this.dataStore.put('background', new Background());
        this.dataStore.put('qiu', new Qiu());
        this.dataStore.put('zhuans',[]);
        this.dataStore.put('gameover',new Over());
        this.dataStore.put('score', new Score());
        this.director.isGameover = false;
        //f用来将小球touchend发射出去后，在调用touchend不会又调用监听器里发射球的方法
        this.f = false;
        //当清除director的map后，touchmove不能再获得ban的x y，就会报错
        //所以当清除director的map后，让touchmove不会再调用获得ban的xy的那部分代码了
        this.director.e = false;
        this.director.run();



    };

    /*test(event){
        event.preventDefault();
        DataStore.getInstance().get('qiu').s = true;
        DataStore.getInstance().get('qiu').click();
    }*/

    //注册一个事件监听器
    registerEvent() {
        this.canvas.addEventListener('touchmove', e => {
            if(!this.director.e){
            e.preventDefault();
            var touch = e.targetTouches[0];
            this.dataStore.get('ban').x = touch.pageX;
           // this.dataStore.get('ban').y = touch.pageY;
            }
        })

    }

    registerEventOne() {



        this.canvas.addEventListener('touchend', e => {
            if(!this.f){
            e.preventDefault();
            //当一次touchend后，设置s为true，小球的画法就变为draw1（）方法
            DataStore.getInstance().get('qiu').s = true;
            DataStore.getInstance().get('qiu').click();
            }
            //当一次touchend后，设置f为true，就再也不会调用到这个监听器里的这部分内容了
            this.f = true;
        })


    }

    registerEventTwo(){
        this.canvas.addEventListener('touchstart',e => {
            e.preventDefault();
           if(Director.getInstance().isGameover){
               this.init();
           }
        })
    }










}