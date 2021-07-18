import { Button, Card,Modal } from 'react-bootstrap';
import LikeImage from '../images/Like.png';
import UnlikeImage from '../images/Unlike.png';
import '../css/showpost.css';
import React, { useState } from 'react'

export const ShowPosts = (props) => {


    const EditThePost = () => {
        props.SetEditedItems(props.title, props.desc);
        props.DelThePost(props.post);
    }

    const DeleteThePost = () => {
        props.DelThePost(props.post);
    }

    return (
        <div className="container MyPostsTobeShown">
            <Card className="text-center PostStyles container my-4 ">
                <Card.Header >
                    {props.mytime}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <di className="p-1">
                        <Button variant="primary" className="mx-2 MyPostsTobeShown" onClick={EditThePost}>Edit</Button>
                        <Button variant="danger" className="MyPostsTobeShown" onClick={DeleteThePost}>Delete</Button>
                    </di>
                    <div className="ms-auto p-2 bd-highlight d-flex">
                        <div onClick={() => { props.AddLikes(props.post) }} className="mx-2">
                            <img src={LikeImage} alt="like" className="Postimage" />
                        </div>
                        <div>
                            {props.post.likes}
                        </div>
                        <div onClick={() => { props.AdddisLikes(props.post) }} className="mx-2">
                            <img src={UnlikeImage} alt="like" className="Postimage" />
                        </div>
                        <div>
                            {props.post.dislikes}
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    )
}
