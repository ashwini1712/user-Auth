const inialUser = []

const userReducer = (state = inialUser , action) =>{
    switch(action.type){
        // case 'USERS_TOKEN':{
        //     return [...action.payload]
        // }
        default:{
            return state
        }
    }
}

export default userReducer