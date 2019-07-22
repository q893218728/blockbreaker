//资源文件加载类
import Resource from './Resource.js';
export class ResourceLoader {
    constructor(){
        //存储所有的image对象
        this.map = new Map(Resource);
        for (let [key,value] of this.map){
            //创建image
            const image = new Image();
            //image的src是这个map的value
            image.src = value;
            //把image对象放进这个map
            this.map.set(key , image);
        }
    }

    onLoaded(callback){
        let loadCount = 0;
        for(let value of this.map.values()){
            value.onload = () => {
                loadCount++;
                if(loadCount>=this.map.size){
                    callback(this.map)
                }
            }
        }
    }
}