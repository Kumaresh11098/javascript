
function validate()
{  
    var name=document.getElementById("father").value;
    var regx=/^([a-zA-Z]+)$/;
    if(regx.test(name)){
        document.getElementById("fatherlable").innerHTML="valid";
        document.getElementById("fatherlable").style.visibility="visible";
        document.getElementById("fatherlable").style.color="green";
    }
    else{
        document.getElementById("fatherlable").innerHTML="Last name is required";
        document.getElementById("fatherlable").style.visibility="visible";
        document.getElementById("fatherlable").style.color="red";
        
    }
    var emailid=document.getElementById("email").value;
    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
    if(regx.test(emailid)){
        document.getElementById("emaillable").innerHTML="valid";
        document.getElementById("emaillable").style.visibility="visible";
        document.getElementById("emaillable").style.color="green";
    }
    else{
        document.getElementById("emaillable").innerHTML="email is required";
        document.getElementById("emaillable").style.visibility="visible";
        document.getElementById("emaillable").style.color="red";
        

    }
    var dateofbirth=document.getElementById("dob").value;
    var regx=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if(regx.test(dateofbirth)){
        document.getElementById("doblable").innerHTML="valid";
        document.getElementById("doblable").style.visibility="visible";
        document.getElementById("doblable").style.color="green";
    }
    else{
        document.getElementById("doblable").innerHTML="required";
        document.getElementById("doblable").style.visibility="visible";
        document.getElementById("doblable").style.color="red";
      

    }
    var mobileno=document.getElementById("mobile").value;
    var regx=/^([7-9{1}])([0-9]{9})$/;
    if(regx.test(mobileno)){
        document.getElementById("mobilelable").innerHTML="valid";
        document.getElementById("mobilelable").style.visibility="visible";
        document.getElementById("mobilelable").style.color="green";
    }
    else{
        document.getElementById("mobilelable").innerHTML="required";
        document.getElementById("mobilelable").style.visibility="visible";
        document.getElementById("mobilelable").style.color="red";
        
    }
    var address=document.getElementsByClassName("addr").value;
    var regx=/^\w$/;
    if(regx.test(address)){
        document.getElementById("addrlable").innerHTML="valid";
        document.getElementById("addrlable").style.visibility="visible";
        document.getElementById("addrlable").style.color="green";
    }
    else{
        document.getElementById("addrlable").innerHTML="required";
        document.getElementById("addrlable").style.visibility="visible";
        document.getElementById("addrlable").style.color="red";
    }
}
