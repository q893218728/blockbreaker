export class DataStore {
    constructor(){
        this.map = new Map();
    }

    put(key,value){
        this.map.set(key,value);
    }

    get(key){
        return this.map.get(key);
    }

    static getInstance(){
        if(!DataStore.dataStore){
            DataStore.dataStore = new DataStore();
        }

        return DataStore.dataStore;
    }

    destory(){
        this.map.clear();
    }
}