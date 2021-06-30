import React, { useState } from 'react'
import { Button } from 'reactstrap'
import TeacherLoginComponent from './TeacherLogin'
import TeacherRegisterComponent from './TeacherRegisterComponent'


export default function TeacherDashBoard() {
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
            {choice ? <TeacherRegisterComponent/> : <TeacherLoginComponent />}
        </div>
    )
}
