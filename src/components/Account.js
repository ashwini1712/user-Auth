import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { startAccountDetails } from '../Actions/accountAction'

const Account = (props) => {

    const users = useSelector((state)=>{
        return state.user
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(startAccountDetails())
        }else{
            props.history.push("/login")
        }
    },[])

    return (
        <div>{users.length !==0 ?
        <>
            <h1>My Account</h1>
            <h2>UserName = <b>{users[0].username}</b></h2>
            <h2>Email = <b>{users[0].email}</b></h2>
            <h2>Created At = <b>{users[0].createdAt}</b></h2>
        </> :null}
        </div>
    )
}

export default Account
