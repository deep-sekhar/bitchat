import React, { Component } from 'react'
import '../css/profile.css'
import { Image } from 'react-bootstrap';

export class Aboutus extends Component {
    render() {
        return (
            <div className=" text-center" id="dpback">
                <div className="container d-flex justify-content-around moving-glow rounded dp-bgm">
                    <Image src="https://github.com/deep-sekhar/Web-Dev-Projects/blob/master/pro2.png?raw=true" roundedCircle id="dp" />
                </div>
                <div className="container profile-text">
                    <h5 className="my-2">
                        Hi, it's Deep here. Hope you liked this fronted project in React.<br />
                        The source code is available in my git repository.
                    </h5><br /><br />
                    <h6 className="my-2">
                        Don't forget to share your reviews.
                    </h6>
                </div>
                <div>
                <span>Follow me on:</span>
                <span class="footlogo  mx-2">
                    <a href="https://www.instagram.com/sekhharr/" target="_blank">
                        <i class="fab fa-instagram-square fa-2x footerlogo"></i>
                    </a>
                </span>
                <span class="footlogo mx-2">
                    <a href="https://www.facebook.com/Sekhharr/" target="_blank">
                        <i class="fab fa-facebook-square fa-2x footerlogo"></i>
                    </a>
                </span>
                <span class="footlogo mx-2">
                    <a href="https://discord.com/channels/787387160101650452/787387162441678890" target="_blank"></a>
                    <i class="fab fa-discord fa-2x footerlogo"></i>
                </span>
                <span class="footlogo mx-2">
                    <a href="https://github.com/deep-sekhar" target="_blank">
                        <i class="fab fa-github fa-2x footerlogo"></i>
                    </a>
                </span>
                <span class="footlogo mx-2">
                    <a href="https://in.linkedin.com/in/deep-sekhar-ghosh-23478b208" target="_blank">
                        <i class="fab fa-linkedin fa-2x footerlogo"></i>
                    </a>
                </span>
                </div>
            </div>
        )
    }
}

export default Aboutus
