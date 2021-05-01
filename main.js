/*function ajax(){
    //Creating an XHR object
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response= JSON.parse(this.responseText);
            var output ="";
            for(var i =0;i<response.length;i++){
             //   $("#demo").html("<input type=",checkbox,">")
                output += `<li><input type = "checkbox" name= "check" id ="check" class= "check">`+ response[i].title +"</li>";
                if(response[i].completed == "true") checkbox.checked = "checked"; //readonly :"readonly" 
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
/*
    function Selectstate() {  
        var Itemselected = [];  
        $("[id*=CheckBoxList1] input:checked").each(function () {  
            Itemselected.push($(this).val());  
        });  
        if (Itemselected.length > 0) {  
            alert("Selected States: " + Itemselected);  
        } else {  
            alert("No One state selected:");  
        }  
    }  
    
function getPost(){
    setTimeout(function(){
        post.forEach(function(pick){
            output += `<li> ${pick.title} </li>`;
        })
        var print = document.getElementById("print");
        print.innerHTML = output;


    },3000);
}


function createPost(paste){

    return  new Promise(function(resolve,reject){
         setTimeout(function(){
             post.push(paste);
             var success = false;
             if(!success){
                 resolve();
             }
             else{
                 reject("Error Occured!");
             }
     },4000);
 });
 }
 
 
 
 createPost({title: "Post Three",body : "News"})
 .then(getPost)
 .catch(function(e){
     console.log(e);
 })

 

*/
function ajax(){
// api url
const api_url = "https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
    
	console.log(data);
	//if (response) {
        show(data);
		//hideloader();
	//}
	//show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>     </th>
		<th>Title</th>
        <th>UserId</th>
		</tr>`;
	
	// Loop to access all rows
   
	for (var i =0; i< data.length; i++) {
		tab += `<tr>
        
            <td><input type = "checkbox" name= "check" id ="check class="check"></td>
	        <td>${data[i].title}</td>
			<td>${data[i].userId}</td>
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("todos").innerHTML = tab;
}
}

$('.check').click(function(){
    const myPromise = new Promise((resolve, reject) =>{
        var checkbox = $(".check").getElementById(check);
        console.log(checkbox);
        var count = checkbox.filter(':checked').length;
        if(count == 5){
            resolve("Congrats. 5 Tasks have been successfully completed!");
        }
        else{
            reject(count);
        }
    });
    myPromise.then((message) => {
        alert(message);
    }).catch((message) => {
        console.log("Checkboxes checked:" + message);
    })
//});

});


function myFunction(x) {
  
   
    if (data[i].completed=="true"){
        `<td><input type = "checkbox" name= "check" id ="check class="check" checked= "checked" disabled ="disabled"></td>`;
        
    } else {
        `<td><input type = "checkbox" name= "check" id ="check class="check"></td>`;
   
    }
}
