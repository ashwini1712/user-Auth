const inialUser = []

const userReducer = (state = inialUser , action) =>{
    switch(action.type){
        case 'ACCOUNT_DETAILS':{
            return [...state , action.payload]
        }
        default:{
            return state
        }
    }
}

export default userReducer