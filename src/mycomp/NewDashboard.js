import React from 'react'
import '../css/mypost.css'
import { useState, useEffect } from 'react'
import { Button, Collapse, Form } from 'react-bootstrap';

const Dashboard = (props) => {

    const [PostTitle, setPostTitle] = useState(props.EditTitle);
    const [PostDesc, setPostDesc] = useState(props.EditDesc);

    const CheckPost = (e) => {
        e.preventDefault();
        if (!PostTitle || !PostDesc) {
            alert("error");
        }
        else {
            props.AddToPost(PostTitle, PostDesc);
            setPostTitle("");
            setPostDesc("");
            setOpen(false);
        }
    }

    const [open, setOpen] = useState(true);

    // const SetPrevPost = ()=>{
    //     setPostTitle(props.EditedTilte);
    //     setPostDesc(props.EditedDesc);
    //     console.log(props.EditedTilte);
    //     console.log(props.EditedDesc);
    // }

    return (

        <div className="MypostHeaders position-relative my-3">

            <div className="my-3 d-flex justify-content-start mx-5">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} className="MyPostsTobeShown position-relative left-0 PostButton">
                    <h4>New Post</h4>
                </Button>
            </div >
            <Collapse in={open} className=" MyPostsTobeShown container" style={{ backgroundColor: "rgb(199, 155, 235)" }}>
                    <div className="card card-body MyPostsTobeShown container" style={{ backgroundColor: "rgb(199, 155, 235)" }}>
                        <form onSubmit={CheckPost}>
                            <div>
                                <input value={PostTitle} onChange={e => setPostTitle(e.target.value)} className="form-control form-control-lg MyPostsTobeShown" type="text" placeholder="post title" ></input>
                            </div>
                            <div className="my-3">
                                <textarea value={PostDesc} onChange={e => setPostDesc(e.target.value)} className="form-control form-control-lg MyPostsTobeShown" id="exampleFormControlTextarea1" rows="3" placeholder="post"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary PostButton MyPostsTobeShown container d-flex justify-content-around" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{ width: "70px" }}>
                                Post
                            </button>
                        </form>
                    </div>
            </Collapse>
        </div>
    )
    

}

export default Dashboard;







