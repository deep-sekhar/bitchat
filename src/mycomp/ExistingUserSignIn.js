import '../css/SignIn.css'
import React, { useState } from 'react'
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
            props.signInChanger(!props.signedIn);
        }
    }

    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header >
                        <Modal.Title>Sign In Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Pls Check all details properly</Modal.Body>
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input pattern="([a-zA-z0-9]){1,25}@([a-zA-z]){1,30}\.{1}([a-zA-z]){1,30}" placeholder="Eg: Tony@gmail.com" type="text" className="form-control SignInItems" id="exampleInputEmail1" aria-describedby="emailHelp" value={UserEmail} onChange={e => setUserEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  className="form-control SignInItems" id="exampleInputPassword1" value={PassWord} onChange={e => setPassWord(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success rounded-pill"  >Sign In</button>
                    <div className="my-4">
                        <button id="NewUser" onClick={() => props.UserStateChanger(!props.ExistingUser)} type="button" >New User? Sign-up here</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
