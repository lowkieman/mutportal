/*input on click*/

//Login form
//username
const getUsername=document.getElementById("username");
getUsername.addEventListener("focus",function(){
    const border=document.getElementById("username");
    border.style.border="1px solid rgb(40, 175, 40)";
    border.style.outlineStyle="solid";
    border.style.outlineColor="rgb(181, 189, 194)";
    border.style.outlineWidth="3px";

});

function validate(){
    if (!getUsername.checkValidity()){
        document.getElementById("validate").innerHTML = getUsername.validationMessage;
    }else {
    }
}

getUsername.addEventListener("blur",function(){
    const border=document.getElementById("username");
    border.style.border="1px solid rgb(181, 189, 194)";
    border.style.outline="none";
});

//password
const getPassword=document.getElementById("password");
getPassword.addEventListener("focus",function(){
    const border1=document.getElementById("password");    
    border1.style.border="1px solid rgb(40, 175, 40)";
    border1.style.outlineStyle="solid";
    border1.style.outlineColor="rgb(181, 189, 194)";
    border1.style.outlineWidth="3px";
});

getPassword.addEventListener("blur",function(){
    const border=document.getElementById("password");
    border.style.border="1px solid rgb(181, 189, 194)";
    border.style.outline="none";
});

/*
Signup
*/
//username1
const username1=document.getElementById("username1");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");
username1.addEventListener("focus",function(){
    const username11=document.getElementById("username1");
    username11.style.border="1px solid rgb(40, 175, 40)";
    username11.style.outlineStyle="solid";
    username11.style.outlineColor="rgb(181, 189, 194)";
    username11.style.outlineWidth="3px";
});

username1.addEventListener("blur",function(){
    const username11=document.getElementById("username1");
    username11.style.border="1px solid rgb(181, 189, 194)";
    username11.style.outline="none";
});

//password1
password1.addEventListener("focus",function(){
    const password11=document.getElementById("password1");
    password11.style.border="1px solid rgb(40, 175, 40)";
    password11.style.outlineStyle="solid";
    password11.style.outlineColor="rgb(181, 189, 194)";
    password11.style.outlineWidth="3px";
});

password1.addEventListener("blur",function(){
    const password11=document.getElementById("password1");
    password11.style.border="1px solid rgb(181, 189, 194)";
    password11.style.outline="none";
});

//password2
password2.addEventListener("focus",function(){
    const password22=document.getElementById("password2");
    password22.style.border="1px solid rgb(40, 175, 40)";
    password22.style.outlineStyle="solid";
    password22.style.outlineColor="rgb(181, 189, 194)";
    password22.style.outlineWidth="3px";
});

password2.addEventListener("blur",function(){
    const password11=document.getElementById("password2");
    password11.style.border="1px solid rgb(181, 189, 194)";
    password11.style.outline="none";

})

/*
*Forgot Password
*/
const username2=document.getElementById("username2");
username2.addEventListener("focus",function(){
    const password22=document.getElementById("username2");
    password22.style.border="1px solid rgb(40, 175, 40)";
    password22.style.outlineStyle="solid";
    password22.style.outlineColor="rgb(181, 189, 194)";
    password22.style.outlineWidth="3px";

});

username2.addEventListener("blur",function(){
    const password11=document.getElementById("username2");
    password11.style.border="1px solid rgb(181, 189, 194)";
    password11.style.outline="none";

})





/*footer */
const getYear= new Date().getFullYear();
document.getElementById("getYear").innerHTML=getYear;
document.getElementById("getYear1").innerHTML=getYear;
document.getElementById("getYear2").innerHTML=getYear;