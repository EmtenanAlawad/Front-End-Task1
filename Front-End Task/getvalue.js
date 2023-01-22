
function OnClick() {
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const SM = document.getElementById('SM');


    console.log("Name: "+name.value);
    console.log("Email: "+email.value);
    console.log("Phone Number: "+number.value);
    console.log("How did you find us: "+SM.value);

}

// document.getElementById("submitbutton").addEventListener(click,OnClick)