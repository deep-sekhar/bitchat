
import { Navbar } from "./mycomp/Navbar";
import { SigninForm } from "./mycomp/SigninForm";
import { ShowPosts } from "./mycomp/ShowPosts";
import  Dashboard  from "./mycomp/Dashboard";
import  NewDashboard  from "./mycomp/NewDashboard";
import { Aboutus } from './mycomp/Aboutus'
import { Profile } from './mycomp/Profile'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'

function App() {

  
  const signInChanger = (bool) => {
    setSignedIn(bool);
    console.log(signedIn);
  }
  
  let SavedSignIn;
  if (localStorage.getItem("SignInval")===null) {
    SavedSignIn = false;
  }
  else{
    SavedSignIn=(JSON.parse(localStorage.getItem("SignInval")));
  }

  const [signedIn, setSignedIn] = useState(SavedSignIn);
    
  useEffect(() => {
    localStorage.setItem("SignInval",JSON.stringify(signedIn))
  }, [signedIn]);

  const AddToPost = (Title, Desc)=>{
    let MyNewTime = WhatstheTime();
    let NewId;
    if (PostDetails.length==0) {
        NewId=1;
    }
    else
    {
        NewId= PostDetails[PostDetails.length-1]+1;
    }
    let NewPost ={
      id: NewId,
      title:Title,
      desc:Desc,
      mytime:MyNewTime,
    };
    setPostDetails([...PostDetails,NewPost]);
    setEditTitle("");
    setEditDesc("");
  }

  // let ID = -2;
  const DelThePost = (post)=>{
    // ID = post.id;
    // console.log(ID);
    setPostDetails(PostDetails.filter(prev=>{
      return prev!==post;
    }));
    // localStorage.setItem(`${post.id}`,0);
  }
  
  // useEffect(() => {
  //   localStorage.setItem(ID,0);
  // }, [PostDetails])

  // useEffect(() => {
  //   localStorage.setItem(`${post.id}`,0);
  // }, [DelThePost])

  // const AddLikes 

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
    if (Mins<10) {
      Mins="0"+Mins;
    }
    let Time = Hours + ":" + Mins + Ampm + '\xa0\xa0\xa0\xa0\xa0' + Month + "/" + Year;
    return Time;
  }

  const [EditTitle, setEditTitle] = useState("");
  const [EditDesc, setEditDesc] = useState("");

  const SetEditedItems = (IncomingTitle, IncomingDesc)=>{
    setEditTitle(IncomingTitle);
    setEditDesc(IncomingDesc);
  }

  let PresentPosts;
  if (localStorage.getItem("posts")==null) {
    PresentPosts=[    
    {
      id: 1,
      title: "Hi there!",
      desc: "My Name is Deep Sekhar Ghosh. This is a sample post",
      mytime: "3:03PM"+'\xa0\xa0\xa0\xa0\xa0'+"7/2021",
    },
    {
      id: 2,
      title: "Any Reviews?",
      desc: "Explore it a bit and feel free to share your reviews",
      mytime: "4:03PM"+'\xa0\xa0\xa0\xa0\xa0'+"7/2021",
    },
    {
      id: 3,
      title: "Any Reviews?",
      desc: "Explore it a bit and feel free to share your review",
      mytime: WhatstheTime(),
    }];
  }
  else{
    PresentPosts=JSON.parse(localStorage.getItem("posts"));
  }
  
  const [PostDetails, setPostDetails] = useState(PresentPosts);

  const ShowAllPosts = PostDetails.map(post =>
    <ShowPosts key={post.id} title={post.title} desc={post.desc} mytime={post.mytime} DelThePost=
    {DelThePost} post={post} SetEditedItems={SetEditedItems}/>);

  useEffect(() => {    
  localStorage.setItem("posts",JSON.stringify(PostDetails));
  // localStorage.setItem(ID,0);
  // ID=-2;
  }, [PostDetails]);



  return (

      <Router>
        <Navbar signedIn={signedIn} signInChanger={signInChanger}/>
          <Switch>
            <Route exact path="/">
              {signedIn ?
                <div>
                  {(EditTitle.length==0&&EditDesc.length==0)?
                  <Dashboard AddToPost={AddToPost}/>:
                  <NewDashboard AddToPost={AddToPost} EditTitle={EditTitle} EditDesc={EditDesc}/>
                  }
                  {ShowAllPosts}
                </div>
                : <SigninForm signedIn={signedIn} signInChanger={signInChanger} />}
            </Route>
            <Route path="/Aboutus" component={Aboutus} />
          </Switch>
      </Router>

  );
}

export default App;
