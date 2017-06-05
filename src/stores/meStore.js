import { EventEmitter } from "events";
import dispatcher from '../dispatchers/dispatcher';
import * as constants from '../shared/constants';
let dataField = constants.DataCallback.Data;
let pageCountField = constants.DataCallback.pageCount;
let totalCountField = constants.DataCallback.totalCount;

class meSearchStore extends EventEmitter{
    
    constructor(){
        super();
        this.meData=[];
        this.dataCount = 0;
        this.totalCount = 0;
    }

    getMEdetails(){
        return { dataField :this.meData,pageCountField: this.dataCount,totalCountField:this.totalCount };        
    }
    
    handleActions(action) {
        switch(action.type) {
        case constants.ActionEvents.createNew: {
            //Handle CREATE data here
            break;
        }
        case constants.ActionEvents.receiveData: {
            this.meData = action.meData;
            this.dataCount = action.dataCount;
            this.totalCount= action.totalCount;            
            this.emit("change");
            break;
        }
    }
}
}
const meStore = new meSearchStore();
dispatcher.register(meStore.handleActions.bind(meStore));
export default meStore;