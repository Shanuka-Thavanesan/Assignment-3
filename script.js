// darkmode
let toggle = document.getElementById("toggleDark");
let body = document.querySelector("body");

toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high")){
        body.style.background = "white";
        body.style.color = "black";
      
        body.style.transition = "2s";
    }else{
        body.style.background ="black";
        body.style.color = "white";
     
        body.style.transition = "2s";
    }
})
// end dark mode
 // map
 function initMap() {
  var options= {
    zoom:20,
    center:{lat:9.729880,lng:80.012950}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}
// end map

// form
// const form= document.getElementById("form");
// const firstName= document.getElementById("firstName");
// const lastName= document.getElementById("lastName");
// const phone= document.getElementById("phone");
// const email= document.getElementById("email");
// const message= document.getElementById("message");
// form.addEventListener("submit", e =>{
//   e.preventDefault();

//   validateInputs();
// });
// const setError = (element,message) =>{
//  const inputControl= element.parentElement;
//  const errorDisplay= inputControl.querySelector('error');
//  errorDisplay.innerText= message;
//  inputControl.classList.add('error');
//  inputControl.classList.remove('success');
// }
// const setSucces = element => {
// const inputControl = element. parentElement;
// const errorDisplay = inputControl .querySelector(.'error');

// errorDisplay.innerText='';
// inputControl.classList.add('success');
// inputControl.classList.remove('error');

// };

// const validateInputs =() =>{
// const firstNameValue = firstName.Value.trim();
// const lastNameValue = lastName.Value.trim();
// const phoneValue = phone.Value.trim();
// const emailValue = email.Value.trim();
// const messageValue = message.Value.trim();

// if(firstName == ''){
//   setError(firstName, "firstName is required")
// }else{
//   setSucces(firstName)
// }
// if(lastName == ''){
//   setError(lastName, "lastName is required")
// }else{
//   setSucces(lastName)
// }
// if(phone == ''){
//   setError(phone, "phone is required")
// }else{
//   setSucces(phone)
// }
// if(email == ''){
//   setError(email, "email  is required")
// }else{
//   setSucces(firstName)
// }

// }; 

// end form

