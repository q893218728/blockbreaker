import {Spirit} from "../base/Spirit.js";
import {DataStore} from "../base/DataStore.js";

export class Over extends Spirit{
    constructor(){
        const image = DataStore.getInstance().res.get('gameover');
        super(image,
            0,
            0,
            image.width,
            image.height,
            window.innerWidth/2 - image.width/2,
            window.innerHeight/2 - image.height/2,
            image.width,
            image.height);
    }


}