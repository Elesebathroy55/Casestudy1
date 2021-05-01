var x = document.getElementById("email");
// var y = document.getElementById("pwd");
//let error= document.getElementById("error");

//function validate(){
    // if(email.value.trim()=="" || pwd.value.trim() ==""){
    //     alert("Fields cannot be empty");
    //     return false;
    // }
    // else{
    //     alert("Validation is proper");
    //     return true;
    // }
    // if(email.value==""){
    //     alert("Email can't be empty!");
    //     return false;
    // }
    // else if(pwd.value==""){
    //     alert("Password can't be blank!");
    //     return false;
    // }
    // else if(pwd.value.length<=7){
    //     alert("Password is too short");
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
    // else{
    //     return true;
    // }

  /*  function validate(callback){
 //let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if ((username.value == "admin")&& (pwd.value == "12345")){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
        callback();
    }
    else{
        alert("Invalid username or Password.!!");
        error.style.color="red";
        return false;
    }}*/
    var x = username.value;
    var y = pwd.value;
    function validate(x, y,callback){
        if ((username.value == "admin")&& (pwd.value == "12345")){
            error.innerHTML="Valid";
            error.style.color="green";
            return true;
            var login = true;
           
        }
        else{
            alert("Invalid username or Password.!!");
            error.style.color="red";
            return false;
            var login = false;
        }
        if(login==true){
        function ajax(){
        //Creating an XHR object
       
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
                var response= JSON.parse(this.responseText);
                var output ="";
                for(var i =0;i<response.length;i++){
                    output += "<li>" + response[i].title +"</li>";
                }
                document.getElementById("demo").innerHTML=output;
            }
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
        }}
    }
       
