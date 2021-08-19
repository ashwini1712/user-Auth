import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startPostLogin } from '../Actions/loginActions'

const Login = (props) => {

    const dispatch = useDispatch()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // useEffect(()=>{
    //     dispatch(startPostLogin(formData))
    //     dispatch(userLog())
    // },[formData])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = {
            email,
            password
        }
        dispatch(startPostLogin(form))
    }


    return (
        <div style={{width:'600px'}} className="p-4">
        <h1 className="text-success">Login to your Account</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control"
                    type="text" 
                    value={email}
                    placeholder="Enter Email/UserName" 
                    required={true}
                    onChange={handleEmail}
                /><br/><br/>
                <input 
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    required={true}
                    onChange={handlePassword}
                /><br/><br/>
                <input type="submit"/>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default Login