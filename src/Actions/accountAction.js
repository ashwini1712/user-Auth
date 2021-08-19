import axios from "axios"

export const startAccountDetails = (data) =>{
    return (dispatch) => {
        axios.get("https://dct-user-auth.herokuapp.com/users/account",{
            headers:{
                "x-auth":localStorage.getItem('token'),
                "content-type": "application/json"
            }
        })
            .then((response)=>{
                if(response.data){
                    dispatch(AccountDetails(response.data))
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const AccountDetails = (data) =>{
    return {
        type:'ACCOUNT_DETAILS',
        payload:data
    }
}

