import React, { Component } from 'react'
import Profilepic from "../images/pro2.png";
import '../css/profile.css'
import { Image } from 'react-bootstrap';

export class Aboutus extends Component {
    render() {
        return (
            <div className=" text-center" id="dpback">
            <div className="container d-flex justify-content-around moving-glow rounded dp-bgm">
                <Image src={Profilepic} roundedCircle id="dp"/>
            </div>
            <div className="container profile-text">
                <h5 className="my-2">
                    Hi, it's Deep here. Hope you liked this fronted project in React.<br/>
                    The source code is available in my git repository.
                </h5><br/><br/>
                <h6 className="my-2">
                    Don't forget to share your reviews.
                </h6>
            </div>
            </div>
        )
    }
}

export default Aboutus
