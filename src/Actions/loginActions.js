import axios from "axios"
import { userLog } from "./logActions"

export const startPostLogin = (data) =>{
    return (dispatch) => {
        axios.post("https://dct-user-auth.herokuapp.com/users/login",data)
            .then((response)=>{
                if(response.data.token){
                    localStorage.setItem('token',response.data.token)
                    dispatch(userLog())
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const startPostRegister = (data) =>{
    return () => {
        axios.post("https://dct-user-auth.herokuapp.com/users/register",data)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty("errors")){
                    alert(result.message)
                }else{
                alert("successfully registered")
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}
