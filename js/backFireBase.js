import {firebaseAPIkey, newsAPIkey, iexCloudAPIkey} from './apikeys.js'


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: firebaseAPIkey,
authDomain: "stock-market-playground.firebaseapp.com",
databaseURL: "https://stock-market-playground.firebaseio.com",
projectId: "stock-market-playground",
storageBucket: "stock-market-playground.appspot.com",
messagingSenderId: "541187275911",
appId: "1:541187275911:web:e9f65bf84216f95ed28c22",
measurementId: "G-PVE2WQ9NZJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
firebase.analytics();

$(()=>{

        $('#transparent').hide();

        const auth = firebase.auth()
        const db = firebase.firestore()

        auth.onAuthStateChanged(user => {
            if (user) {
                //localStorage.setItem("currentUser",user.email);
                // console.log(user)
            }
            else {
                console.log('user logged out')
                window.location.href = "./index.html"
            }
        })

        $('#logout').click((e) =>{
            e.preventDefault();
            auth.signOut()
            window.location.href = "./index.html"
        })
})
