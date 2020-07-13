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

        const auth = firebase.auth()
        const db = firebase.firestore()
        
    
        // listen for authentication status changes
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log(`user logged in: ${user.email}`)
                // console.log(user)
            }
            else {
                console.log('user logged out')
            }
        })
        
        
        
        //  Register a new user
        var $SUemail = $('#registerUsername')
        var $SUpassword = $('#registerPassword')
        var $SUpasswordConfirm = $('#passwordConfirm')
        var $SUsubmit = $('#registerSubmit')
        
        
        $SUsubmit.click((e) => {
            e.preventDefault();
            //get user info
            let userID = $SUemail[0].value;
            let userPassword = $SUpassword[0].value;
            let passwordConf = $SUpasswordConfirm[0].value
            if ($SUpassword[0].value == $SUpasswordConfirm[0].value) {
                auth.createUserWithEmailAndPassword(userID, userPassword)
                .then(cred => {
                    // console.log(cred.user)
                    $('#exampleModal').modal('toggle')
                }).catch(function(e) {
                    // console.log(e.message)
                    $('#modalerror')[0].innerHTML = e.message
                })
            }
            else {
                $('#modalerror')[0].innerHTML = "Passwords do not match"
            }
    
        })


        //   Log the user Out
        

        // Log the user In
        let signin = $('#signin')
        // console.log(signin)
        signin.click((e) =>{
            e.preventDefault();
            // alert("you clicked!")
            var id = $('#inputUsername')[0].value
            var password = $('#inputPassword')[0].value
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
                auth.signInWithEmailAndPassword(id, password)
                    .then((cred)=>{
                        localStorage.setItem("currentUser",id);
                        console.log(cred)
                        window.location.href = "./dashboard.html"
                }).catch(function(e) {
                    // console.log(e.message)
                    $('#error')[0].innerHTML = e.message
                })
            })
        })

        // Get data from firebase
        db.collection('users').get().then(snapshot => {
            let docs = snapshot.docs;
            docs.forEach(piece => {
                const info = piece.data();
                // console.log(info)
            })
        })
})