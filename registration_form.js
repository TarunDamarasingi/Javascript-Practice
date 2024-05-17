function validationForm(){
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("name-error").value;
    const addressError = document.getElementById("address-error").value;
    const emailError = document.getElementById("email-error").value;
    nameError.textContent = " ";
    addressError.textContent = " ";
    emailError.textContent = " ";
    let isvalid = true;
    if (name === " "){
        nameError.textContent = "Please Enter Your Name Properly";
        isvalid = false;
    }
    if (address === " "){
        addressError.textContent = "Please Enter Your Address Properly";
        isvalid = false;
    }
    if (email === " " || !email.includes("@")){
        emailError.textContent = "Please Enter Your Email Address";
    }
    return isvalid;
}