import firebase from '../configs/firebase-config';

const githubAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            // const credential = res.credential;
            // const token = credential.accessToken;
            const user = res.user;
            return user;
        })
        .catch((res, error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.email;
            // const credential = error.credential;
            return error;
        });
};

export default githubAuth;