/* Add your JavaScript to this file */
 
"use strict";

window.onload= function(){
//document.getElementsByClassName("btn").addEventListener('click', add_email());
var s_button = document.getElementsByTagName("button")[0];
var email_input = document.getElementById("email");
var msg = document.getElementsByClassName("message")[0];


s_button.addEventListener('click', add_email);

function add_email(e){
    var email_value = email_input.value;
    e.preventDefault();
    msg.innerHTML= `Thank you! Your email address ${email_value} has been added to our mailing list!`;
    console.log("submitted");
}

s_button.addEventListener('click',no_email );
function no_email(e) {
    var email_value = email_input.value;
    e.preventDefault();
    if (email_value.length==0){
        msg.innerHTML= `Please enter a valid email!`;
        console.log("No email was submitted");
    }
    
}

}