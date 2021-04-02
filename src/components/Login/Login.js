import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // console.log(result);
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                console.log(email);
                history.replace(from);
            }).catch((error) => {

            });
        e.preventDefault();
    }

    return (
        <Container className="mt-5">
            <form action="">
            <Button onClick={handleGoogleSignIn} variant="warning"><strong>Sign In with Google</strong></Button>
            </form>
        </Container>
    );
};

export default Login;