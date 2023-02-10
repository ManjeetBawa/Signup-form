const seterror = (id, message) => {
    document.getElementById(id).innerHTML = message;
}
const clearerror = () => {
    let errors = document.getElementsByClassName("error");
    for (let item of errors) {
        item.innerHTML = '';
    }
}

const validateform = () => {
    clearerror();
    let returnval = true;
    let name = document.forms['myForm']['fname'].value;
    let emailname = document.forms['myForm']['femail'].value;
    let phone = document.forms['myForm']['phone'].value;
    let password = document.forms['myForm']['pass'].value;
    let cpassword = document.forms['myForm']['cpass'].value;

    // NAME VALIDATIONS
    if (name.length == 0) {
        seterror("nameerror", "* Name should not be empty");
        returnval = false;
    }
    // EMAIL VALIDATIONS
    if (emailname.length == 0) {
        seterror("emailerror", "* email should not be empty");
        returnval = false;
    }
    // PHONE VALIDATIONS
    if (phone.length == 0) {
        seterror("phoneerror", "* Phone Number should not be empty");
        returnval = false;
    }
    else if (phone.length != 10) {
        seterror("phoneerror", "* Please enter valid phone number");
        returnval = false;
    }
    // PASSWORD VALIDATIONS
    if (password.length == 0) {
        seterror("passerror", "* Password shoud not be empty");
        returnval = false;
    }
    else if (password.length < 5) {
        seterror("passerror", "* Password length too short");
        returnval = false;
    }
    else if (password != cpassword) {
        seterror("cpasserror", "* Password does not match");
        returnval = false;
    }
    if (returnval) {
        alert("Form Submitted");
        returnval = false;
        location.reload();
    }
    return returnval;
}
