import {DataStore} from "../js/base/DataStore.js";
import {Spirit} from "../js/base/Spirit.js";

export class Ban extends Spirit {

    constructor() {
        super(DataStore.getInstance().res.get('ban'));
        this.x = window.innerWidth / 2 - this.image.width / 2;
        this.y = window.innerHeight - window.innerHeight / 8

    }

    draw() {

        DataStore.getInstance().ctx.drawImage(
            this.image,
            this.srcX = 0,
            this.srcY = 0,
            this.width = 96,
            this.height = 24,
            this.x,
            this.y,
            this.width = 96,
            this.height = 24
        )

        if (this.x >= window.innerWidth - this.image.width) {
            this.x = window.innerWidth - this.image.width;
        }
        if (this.x <= 0) {
            this.x = 0;
        }

        if(this.y <= 400){
            this.y = 400;
        }

    }



}