// Initialize Firebase
var config = {
apiKey: "AIzaSyC76A0036jW2IQoJGwRaAfH0XvwkCx4gaY",
authDomain: "portfolio-84126.firebaseapp.com",
databaseURL: "https://portfolio-84126-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "portfolio-84126",
storageBucket: "portfolio-84126.appspot.com",
messagingSenderId: "799345602833",
appId: "1:799345602833:web:8b5d8ba79dd312eeb1dcb0",
measurementId: "G-X6CWSTWXS1"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();

//Get value
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, company, email, phone, message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
company: company,
email: email,
phone: phone,
message: message
});
}

