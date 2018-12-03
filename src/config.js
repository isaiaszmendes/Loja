import firebase from 'firebase'
import Rebase from 're-base'

// Initialize Firebase
const firebaseInfo = {
    apiKey: "AIzaSyDXOJSGLO1KnUA4jh8m10ZGHUcG7tR70z4",
    authDomain: "loja-mmartan.firebaseapp.com",
    databaseURL: "https://loja-mmartan.firebaseio.com",
    projectId: "loja-mmartan",
    storageBucket: "loja-mmartan.appspot.com",
    messagingSenderId: "500373552544"
}

const app = firebase.initializeApp(firebaseInfo)
const config = Rebase.createClass(app.database())


export default config