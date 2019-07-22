import {DataStore} from "../js/base/DataStore.js";
import {Spirit} from "../js/base/Spirit.js";

export class Zhuan extends Spirit {
    constructor() {
        super(DataStore.getInstance().res.get('zhuan'));

        this.width = 50;

        this.s = false;
    }


    draw() {
        DataStore.getInstance().ctx.drawImage(
            this.image,
            0,
            0,
            50,
            20,
            this.x,
            this.y,
            this.width,
            20,
        )

        /* let arr = [this.x,this.y];
         this.map.set(0,arr);*/
    }

    /*for(let i = 0;i<7;i++){
        for(let j = 0;j<7;j++){
            DataStore.getInstance().ctx.drawImage(
                this.image,
                0,
                0,
                50,
                20,
                this.x = 10 + i*this.width,
                this.y = 14 + j*this.height,
                50,
                20,
            )
        }
    }
*/


}
