

const buttonLogin = document.getElementById("bu");
const buttonLogin2 = document.getElementById("bu2");
const buttonsmile= document.getElementById("smile");
const buttonfrown = document.getElementById("frown");
const inputuser = document.getElementById("user")  ;
const inputpss = document.getElementById("pass")  ;
const message = document.getElementById("message")  ;

function inputTextValidation () {
   
    if(inputuser.value == "" || inputpss.value == "" ){
        loginFrown();
        if(inputuser.value == ""){
            inputuser.style.borderColor ="red";
        }
        if(inputpss.value == "" ){
            inputpss.style.borderColor ="red";
        }
    }
    else{
    loginSmaile();
    if(inputuser.value != ""){
        inputuser.style.borderColor ="green";
    }
    if(inputpss.value != "" ){
        inputpss.style.borderColor ="green";
    }
    }
    
    console.log(inputuser.value);}


function loginFrown(){
    if(buttonLogin !=null &&  buttonfrown !=null &&  buttonsmile !=null &&  buttonsmile !=null ){
        buttonLogin.style.color ="red";
        buttonLogin.style.borderColor ="red";
        buttonfrown.style.display ="block";
        buttonfrown.style.color = "red";
        buttonLogin.style.opacity =".6";
        buttonLogin.style.pointerEvents ="none";
    }
}

function loginSmaile(){
    if(buttonLogin !=null &&  buttonfrown !=null &&  buttonsmile !=null){
        buttonLogin.style.color ="green";
        buttonLogin.style.borderColor ="green";
        buttonsmile.style.display ="block";
        buttonsmile.style.color = "green";
    }
}


function reset(){
    if(buttonLogin !=null &&  buttonfrown !=null &&  buttonsmile !=null){
        if(inputuser.value != ""|| inputpss.value != "" ){
        buttonLogin.style.pointerEvents ="all";
        buttonfrown.style.display ="none";
        buttonsmile.style.display ="none";
        
    }
   
}}


function loging( ){
var xmlhttp = new   XMLHttpRequest () ;
xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status ==200){
       
        if(this.responseText == "false"){message.style.display ="block";console.log("done");}
        
        else{}
    }
};
xmlhttp.open( "POST", 'indexcontoller.php?user=' +inputuser.value+  '&password=' + inputpss.value ,true);
xmlhttp.send();
}

