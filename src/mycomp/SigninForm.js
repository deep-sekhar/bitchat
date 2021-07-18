import Logo1 from '../images/newlogo1.png'
import '../css/SignIn.css'
import React, { useState, useEffect } from 'react'
import {NewUser} from './NewUser'
import {ExistingUserSignIn} from './ExistingUserSignIn'

export const SigninForm = (props) => {
    const MyStyle1 = {
        width: "45%",
    }
    const MyStyle2 = {
        height: "100vh",
    }
    const [ExistingUser, setExistingUser] = useState(true);
    
    const UserStateChanger = (bool) => {
        setExistingUser(bool);
    }

    return (
        <div className="container" style={MyStyle2} id="MyInputForm">
            <div className="row row-fluid " id="MyInputFormItems">
                <div className="col-xs-3 col-sm-6">
                    <div>
                    <img src={Logo1} alt="Bit-Chat logo" className="img img-fluid my-5 rounded-pill mx-3 " style={MyStyle1} />
                    </div>
                    <div>
                        <h2 className="text-dark">
                            Be simple, Be social
                        </h2>
                    </div>
                </div>
                <div className="col-xs-7 col-sm-4">
                    {ExistingUser?<ExistingUserSignIn signInChanger={props.signInChanger} UserStateChanger={UserStateChanger} ExistingUser={ExistingUser}/>:<NewUser signInChanger={props.signInChanger} UserStateChanger={UserStateChanger} ExistingUser={ExistingUser}/>}
                </div>
            </div>
        </div>
    )
}
