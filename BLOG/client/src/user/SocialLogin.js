import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { socialLogin, authenticate } from "../auth";

class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

    responseGoogle = response => {
        console.log("this comes from google", response);
        const { googleId, name, email, imageUrl } = response.profileObj;
        const user = {
            password: googleId,
            name: name,
            email: email,
            imageUrl: imageUrl
        };
         console.log("user obj to social login: ", user);
        socialLogin(user).then(data => {
            console.log("signin data: ", data);
            if (data.error) {
                console.log("Error Login. Please try again..");
            } else {
                console.log("signin success - setting jwt: ", data);
                authenticate(data, () => {
                    this.setState({ redirectToReferrer: true });
                });
            }
        });
    };

    responseFacebook = response => {
        console.log("this comes from facebbok", response);
        const { name, email, picture, appId } = response;
        const user = {
            password: appId,
            name: name,
            email: email,
            picture: picture
        };
        socialLogin(user).then(data => {
            console.log("signin data: ", data);
            if (data.error) {
                console.log("Error Login. Please try again..");
            } else {
                console.log("signin success - setting jwt: ", data);
                authenticate(data, () => {
                    this.setState({ redirectToReferrer: true });
                });
            }
        });
      };

 componentClicked = () => {
        console.log( "Clicked!" )
      };

    render() {
        // redirect
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to="/" />;
        }

        return (
            <div>

            <GoogleLogin
                clientId="760336571918-p5grg31predg1gcqbnk29d74cihddrfm.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />

<p></p>

            <FacebookLogin
                appId="3607081159338784"
                autoLoad={false}
                fields="name,email,picture, password"
                buttonText="Facebook Login"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
            </div>
        );
    }
}

export default SocialLogin;
