import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react'

export const ShowPosts = (props) => {

    
    let PrevLiked;
    if (localStorage.getItem(`${props.post.id}`)==null) {
        PrevLiked=0;
    }
    else{
        PrevLiked=parseInt(localStorage.getItem(`${props.post.id}`));
        console.log(PrevLiked);
    }
    // const LastNoofLikes = ()=>{
    //     if (localStorage.getItem(`${props.post.id}`)==null) {
    //         PrevLiked=0;
    //     }
    //     else{
    //         PrevLiked=localStorage.getItem(`${props.post.id}`);
    //         console.log(PrevLiked);
    //     }

    // }

    const [PostLikes, setPostLikes] = useState(PrevLiked);

    const AddLikes = () => {
        setPostLikes(PostLikes+1);
    }

    // const ResetLikes =()=>{
    //     setPostLikes(0);
    // }

    useEffect(() => {
        localStorage.setItem(`${props.post.id}`,PostLikes)
    }, [PostLikes]);

    const EditThePost = () => {
        props.SetEditedItems(props.title, props.desc);
        props.DelThePost(props.post);
    }

    const DeleteThePost = ()=>{
        // ResetLikes();
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
                    <di className="p-2  ">
                        <Button variant="primary" className="mx-2 MyPostsTobeShown" onClick={EditThePost}>Edit</Button>
                        <Button variant="danger" className="MyPostsTobeShown" onClick={DeleteThePost}>Delete</Button>
                    </di>
                    <div className="ms-auto p-2 bd-highlight d-flex">
                        <div onClick={AddLikes} className="mx-2">
                            like
                            </div>
                            <div>
                            {PostLikes}
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    )
}
