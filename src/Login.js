import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [stete, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });


        }).catch(error => alert(error.nessage))
    }
    return (
        <div className = 'login'>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt=""/>
                <br />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-2019-present.jpg" alt=""/>
            </div>
            <Button type = 'submit' onClick = {signIn}>
                Sing In!
            </Button>
        </div>
    )
}

export default Login
