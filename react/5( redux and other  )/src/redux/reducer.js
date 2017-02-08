let initialState={"listData":[1,2,32,5]};
const reducer=(state=initialState,active)=>{
    switch (active.type){
        case "ADD_ITEM":
            let newState={};
            newState.listData=state.listData.concat("new Data");
            return newState;
            break;
        default:
            return state
    }

};
export default reducer


if(module.hot){
    module.hot.accept()
}