 const CHECK_STATUS = 'CHECK_STATUS';

 initialState = [];

 export const checkStatus = () =>{
    return { 
        type: CHECK_STATUS,
        text: ''
    }
 }

 export const statusReducer = (state = initialState, action)=>{
    switch (action.type){
        case CHECK_STATUS:
            return {
                text: 'Under Construction'
            }
        
        default:
            return state
    }
 }

 export default statusReducer;