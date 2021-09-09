


let fnamenode, lnamenode, emailnode, flag = 0, submit = 0;


fnamenode = document.getElementById('fname');
lnamenode = document.getElementById("lname");


emailnode = document.getElementById("mail");



function valid() {
    flag = 0;

    validate1(fnamenode);
    validate1(lnamenode);
    validate3();
    validate4();
    validate5();
    console.log(flag)
    return flag == 5;
}


function validate1(namenode) {
    var name = namenode.value;
    console.log(name);
    var regexname = /^[A-Za-z]{2,30}$/;
    if (!regexname.test(name)) {
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alert!!</strong>Enter the Proper name
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    }
    else {
        flag++;
    }
}


function validate3() {
    var mail = document.getElementById('mail');
    var regexmail = /\S+@\S+\.\S+/;
    if (!regexmail.test(mail.value)) {
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alert!!</strong>Enter the Proper Mail ID
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    }
    else {
        flag++;
    }
}
function validate4() {
    var pass = document.getElementById('pass');

    var regexpass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    if (!regexpass.test(pass.value)) {
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alert!!</strong>Enter the Proper password with atleast 1 number , 1 special char and a combination of upper and lowercase
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    }
    else {
        flag++;
    }
}
function validate5() {
    var cpass = document.getElementById('cpass');
    var pass = document.getElementById('pass');
    console.log("pass= " + pass.value + " cpass= " + cpass.value);
    if (pass.value === cpass.value) {
        flag++;
    }
    else {
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alert!!</strong>password and confirm password doesnot match
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
        // alert("password and confirm password doesnot match");
    }
}

function submitform() {
    if (valid()) {

        document.forms['signupform'].submit();
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Form Submission Sucessfully done!!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
        submit = 1;
        // console.log(document.querySelectorAll('input'));
    }
    else {
        returnToPreviousPage();
    }
}
function check() {
    if (submit == 1) {
        document.getElementById('alertmsg').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Form Submission Sucessfully done!!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    }
}
