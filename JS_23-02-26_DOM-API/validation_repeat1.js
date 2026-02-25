function validate(){
    const email = document.forms["Myform"]["email1"].value;
    const password = document.forms["Myform"]["password1"].value;
    if(email.length <=8){
        alert("Email must be more than 8 characters");
        return false;
    }
    if(!email.includes("@") || !email.includes(".com")){
        alert("Email must contain @ and .com");
        return false;
    }
    if(!email.match(/[A-Z]/)){
        alert("Email must contain at least one uppercase letter");
        return false;
    }
    if(!email.match(/[0-9]/)){
        alert("Email must not contain numbers");
        return false;
    }
    if(password.length <=8){
        alert("Password must be more than 8 characters");
        return false;
    }
    if(!password.match(/[A-Z]/)){
        alert("Password must contain at least one uppercase letter");
        return false;
    }
    if(!password.match(/[0-9]/)){
        alert("Password must contain at least one number");
        return false;
    }
    if(!password.match(/[@#$%^&*]/)){
        alert("Password must not contain special characters");
        return false;
    }
    else{
    alert("Validation successful");
    return true;
    }

}
