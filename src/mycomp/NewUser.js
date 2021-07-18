import React from 'react'
import '../css/SignIn.css'
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const NewUser = (props) => {
    const [UserEmail, setUserEmail] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [MyUserName, setMyUserName] = useState("");
    const [ConfirmNumber, setConfirmNumber] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CheckIfValid = (e) => {
        e.preventDefault();
        if (UserEmail && PassWord && MyUserName && PhoneNumber && (ConfirmNumber==PassWord)) {

            props.signInChanger(!props.signedIn)
        }
        else {
            handleShow();
        }
    }
    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header >
                        <Modal.Title>Sign Up Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Pls fill all boxes properly</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="conatiner my-5">
                <form onSubmit={CheckIfValid}>
                    <div className="mb-3">
                        <label htmlFor="UserName" className="form-label">Username</label>
                        <input value={MyUserName} onChange={e => setMyUserName(e.target.value)} className="form-control SignInItems" type="text"  aria-label="default input example" id="UserName"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={UserEmail} onChange={e => setUserEmail(e.target.value)} pattern="([a-zA-z0-9]){1,25}@([a-zA-z]){1,30}\.{1}([a-zA-z]){1,30}" placeholder="Eg: Tony@gmail.com" type="email" className="form-control SignInItems" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="UserNumber" className="form-label">Phone Number</label>
                        <input value={PhoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control SignInItems" type="text" pattern="[0-9]{9}"  aria-label="default input example" id="UserNumber" placeholder="Ex-9345959599"></input>
                    </div>
                    <div className="mb-3">
                        <label for="inputPassword5" className="form-label" >Password</label>
                        <input value={PassWord} pattern="([a-zA-z0-9]){8,20}" onChange={e => setPassWord(e.target.value)} type="password" id="inputPassword5" className="form-control SignInItems" aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" class="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="inputPassword6" className="form-label">Confirm Password</label>
                        <input value={ConfirmNumber} onChange={e => setConfirmNumber(e.target.value)} type="password" id="inputPassword6" className="form-control SignInItems" aria-describedby="passwordHelpBlock" />
                    </div>
                    <button type="submit" className="btn btn-success rounded-pill" >Create Account</button>
                    <div className="my-4">
                        <button id="NewUser" onClick={() => props.UserStateChanger(true)} type="button" >ExistingUser? Sign-in here</button>
                    </div>
                </form>
            </div>
        </div>
    )

}






