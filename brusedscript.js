let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let message = document.getElementById('message')
let isValid = true;


function checkForm() {
  
   let errorDivs = document.getElementById('formErrors');
   errorDivs.innerHTML = "";
 
   let output ="";
   

   errorDivs.classList.remove("hide");
   

   var ul = document.createElement('ul');

   ul.setAttribute('style', 'padding: 0; margin: 0;');
   ul.style = "display: block";
   

   if (fullName.value <= 1){
      isValid = false;
      let nameLi = document.createElement("li");
      
      nameLi.innerHTML = "Missing full name.";
      

      ul.appendChild(nameLi);
      document.getElementById("formErrors").classList.add("error");
   }
   
   let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   
   if (email.value.length === 0 || !(regEmail.test(email.value))){

      //Otherwise, display "Invalid or missing email address."
      isValid = false;
      let emailLi = document.createElement("li");
      
      emailLi.innerHTML = "Invalid or missing email address.";
      

      ul.appendChild(emailLi);
      document.getElementById("formErrors").classList.add("error");

   }
      
   
   if (phone.value.length < 10 || phone.value.length > 10 ){
      isValid = false;
   
      //Otherwise, display "Password must be between 10 and 20 characters."
      let phoneLi = document.createElement("li");
      phoneLi.innerHTML = "Phone must include 10 numbers.";
      

      ul.appendChild(phoneLi);
      document.getElementById("formErrors").classList.add("error");
   }

   if (message.value <= 1){
    isValid = false;
    let messageLi = document.createElement("li");
    
    messageLi.innerHTML = "Please leave a message";
    

    ul.appendChild(messageLi);
    document.getElementById("formErrors").classList.add("error");
 }

   errorDivs.appendChild(ul);
}

if (isValid){

   document.getElementById("formErrors").classList.add("hide");

   document.getElementById("formErrors").classList.remove("error");
}


document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   event.preventDefault();
});
