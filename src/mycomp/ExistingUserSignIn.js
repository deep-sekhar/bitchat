import '../css/SignIn.css'
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';

export const ExistingUserSignIn = (props) => {

    const [UserEmail, setUserEmail] = useState("");
    const [PassWord, setPassWord] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CheckIfValid = (e) => {
        e.preventDefault();
        if (!UserEmail || !PassWord) {

            handleShow();
        }
        else {
            props.signInChanger(!props.signedIn)
        }
    }

    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header >
                        <Modal.Title>Sign In Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Pls Check your email and password properly</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="container my-5">
                <form onSubmit={CheckIfValid}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control SignInItems" id="exampleInputEmail1" aria-describedby="emailHelp" value={UserEmail} onChange={e => setUserEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" pattern="([a-zA-z\D]){8,20}" className="form-control SignInItems" id="exampleInputPassword1" value={PassWord} onChange={e => setPassWord(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark rounded-pill" style={{ backgroundColor: "rgb(119, 7, 209)" }} >Sign In</button>
                    <div className="my-4">
                        <button id="NewUser" onClick={() => props.UserStateChanger(!props.ExistingUser)} type="button" >New User? Sign-up here</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
