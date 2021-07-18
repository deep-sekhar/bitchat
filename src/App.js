
import { Navbar } from "./mycomp/Navbar";
import { SigninForm } from "./mycomp/SigninForm";
import { ShowPosts } from "./mycomp/ShowPosts";
import Dashboard from "./mycomp/Dashboard";
import NewDashboard from "./mycomp/NewDashboard";
import { Aboutus } from './mycomp/Aboutus'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button, Card, Modal } from 'react-bootstrap';

function App() {


  let SavedSignIn;
  if (localStorage.getItem("SignInval") === null) {
    SavedSignIn = false;
  }
  else {
    SavedSignIn = (JSON.parse(localStorage.getItem("SignInval")));
  }

  const [signedIn, setSignedIn] = useState(SavedSignIn);

  const signInChanger = (bool) => {
    if (bool=="true") {
      // handleShowz();
    }
    setSignedIn(bool);
  }

  // const [showz, setShowz] = useState(false);
  // const handleClosez = () => setShowz(false);
  // const handleShowz = () => setShowz(true);
  // setInterval(() => {
  //   setShowz(false);
  // }, 500);

  useEffect(() => {
    localStorage.setItem("SignInval", JSON.stringify(signedIn))
  }, [signedIn]);

  const AddToPost = (Title, Desc) => {
    let MyNewTime = WhatstheTime();
    let NewId;
    if (PostDetails.length == 0) {
      NewId = 1;
    }
    else {
      NewId = PostDetails[PostDetails.length - 1] + 1;
    }
    let NewPost = {
      id: NewId,
      title: Title,
      desc: Desc,
      mytime: MyNewTime,
      likes: 0,
      dislikes: 0
    };
    setPostDetails([...PostDetails, NewPost]);
    setEditTitle("");
    setEditDesc("");
  }

  const DelThePost = (post) => {
    setPostDetails(PostDetails.filter(prev => {
      return prev !== post;
    }));
  }

  const AddLikes = (post) => {
    setPostDetails(PostDetails.map(prev => {
      if (prev === post) {
        prev.likes = prev.likes + 1;
      }
      return prev;
    }))
  }
  const AdddisLikes = (post) => {
    setPostDetails(PostDetails.map(prev => {
      if (prev === post) {
        prev.dislikes = prev.dislikes + 1;
      }
      return prev;
    }))
  }


  function WhatstheTime() {
    let date = new Date();
    let Month = date.getMonth() + 1;
    let Year = date.getFullYear();
    let Hours = date.getHours();
    let Mins = date.getMinutes();
    let Ampm = 'AM';
    if (Hours > 12) {
      Ampm = 'PM';
      Hours %= 12;
    }
    if (Mins < 10) {
      Mins = "0" + Mins;
    }
    let Time = Hours + ":" + Mins + Ampm + '\xa0\xa0\xa0\xa0\xa0' + Month + "/" + Year;
    return Time;
  }

  const [EditTitle, setEditTitle] = useState("");
  const [EditDesc, setEditDesc] = useState("");

  const SetEditedItems = (IncomingTitle, IncomingDesc) => {
    setEditTitle(IncomingTitle);
    setEditDesc(IncomingDesc);
  }

  let PresentPosts;
  if (localStorage.getItem("posts") == null) {
    PresentPosts = [
      {
        id: 1,
        title: "Hi there!",
        desc: "My Name is Deep Sekhar Ghosh. This is a sample post",
        mytime: "3:03PM" + '\xa0\xa0\xa0\xa0\xa0' + "7/2021",
        likes: 10,
        dislikes: 1
      },
      {
        id: 2,
        title: "Visit different sections",
        desc: "Try pressing on the different buttons available here",
        mytime: "4:03PM" + '\xa0\xa0\xa0\xa0\xa0' + "7/2021",
        likes: 43,
        dislikes: 2
      },
      {
        id: 3,
        title: "Any Reviews?",
        desc: "Explore it a bit and feel free to share your review",
        mytime: WhatstheTime(),
        likes: 12,
        dislikes: 0
      }];
  }
  else {
    PresentPosts = JSON.parse(localStorage.getItem("posts"));
  }

  const [PostDetails, setPostDetails] = useState(PresentPosts);

  const ShowAllPosts = PostDetails.map(post =>
    <ShowPosts key={post.id} title={post.title} desc={post.desc} mytime={post.mytime} DelThePost=
      {DelThePost} post={post} SetEditedItems={SetEditedItems} AddLikes={AddLikes} AdddisLikes={AdddisLikes} />);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(PostDetails));
  }, [PostDetails]);



  return (

    <Router>
      <Navbar signedIn={signedIn} signInChanger={signInChanger} />
      <Switch>
        <Route exact path="/bitchat/">
          {signedIn ?
            <div>
              {/* <div>
                <Modal show={showz} onHide={handleClosez} centered>
                  <Modal.Body>Sign In Succesfull</Modal.Body>
                  <Modal.Footer>
                        <Button variant="success" onClick={handleClosez}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
              </div> */}
              {(EditTitle.length == 0 && EditDesc.length == 0) ?
                <Dashboard AddToPost={AddToPost} /> :
                <NewDashboard AddToPost={AddToPost} EditTitle={EditTitle} EditDesc={EditDesc} />
              }
              {ShowAllPosts}
            </div>
            :
            <div>
              <SigninForm signedIn={signedIn} signInChanger={signInChanger} />
            </div>}
        </Route>
        <Route path="/bitchat/Aboutus">
          {signedIn ? <Aboutus /> : <SigninForm signedIn={signedIn} signInChanger={signInChanger} />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
