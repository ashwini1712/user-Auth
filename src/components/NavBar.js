import React from 'react'
import { Link, withRouter ,Route} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { userLog } from '../Actions/logActions'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import AddNotes from './AddNotes'

const NavBar = (props) => {

    const dispatch = useDispatch()

    const logStatus = useSelector((state)=>{
        return state.logStatus
    })

    return (
        <div>
            <Link to="/">Home</Link> | 
            {logStatus?
            <>
            <Link to="/account">Account</Link> |
            <Link to="/notes">My Notes</Link> |
            <Link onClick={()=>{
                localStorage.removeItem('token')
                    dispatch(userLog())
                    alert("successfully logged out")
                    props.history.push('/')
                }} to="/logout">Logout</Link>
        </>:(
        <>
            <Link to="/register">Register</Link> |
            <Link to="/login">Login</Link>
        </>
        )}
        <Route path="/" component={Home} exact={true}/>
            <Route path="/login" component = {Login} />
            <Route path="/register" component={Register} />
            <Route path="/account" component={Account} />
            <Route path="/notes" component={AddNotes} />

        </div>
    )
}
export default withRouter(NavBar)