  var x = username.value;
    var y = pwd.value;
    let regexp= /\d*[1-5]{5}$/;
    
    function validate(callback){
        //let regexp= /\d*[1-5]{5}$/;
        if ((username.value == "admin")&& (pwd.value=="12345")){
            error.innerHTML="Valid";
            error.style.color="green";
            return true;
            var login = true;
           callback(login);
        }
        else{
            alert("Invalid username or Password.!!");
            error2.innerHTML="Invalid"
            error2.style.color="red";
            return false;
            var login = false;
            callback(login);
        }
    }
        function pass(login){

            if(login=="true"){
                $(document).ready(function() {
         
                    var url = "https\\todo.html";
                    //$(location).attr('href',url);
                    window.location.replace("todo.html");
                   
                   });
        }
        else{
            console.log("Unsuccesful login");
        }
    }
