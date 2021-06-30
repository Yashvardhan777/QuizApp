import React, { useState } from 'react'
import { Button } from 'reactstrap'
import StudentLoginComponent from './StudentLogin'
import StudentRegisterComponent from './StudentRegisterComponent'

export default function StudentDashBoard() {
    const [choice, setchoice] = useState(false)
    function Register(){
        setchoice(true);
    }
    function Login(){
        setchoice(false);
    }
    return (
        <div>
            <Button onClick={Register}>
                Register
            </Button>
            <Button onClick={Login}>
                Login
            </Button>
            {choice ? <StudentRegisterComponent/> : <StudentLoginComponent />}
        </div>
    )
}
