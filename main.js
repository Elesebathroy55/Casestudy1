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
    
    /* Function to hide the loader
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
    }*/
    // Function to define innerHTML for HTML table
    function show(data) {
        let tab =
            `<tr>
            <th>     </th>
            <th>Things To-Do : Title</th>
            <th> Status </th>
            </tr>`;
        
        // Loop to access all rows
       
        for (var i =0; i< data.length; i++) {
          if (data[i].completed==true){
            tab += `<tr>
            
                <td><input type = "checkbox" name= "check" id ="check" class="check" checked = "checked" disabled= "disabled" ></td>
                <td>${data[i].title}</td>
                <td>Completed</td>
                </tr>`;}
        else {
                tab += `<tr>
                <td><input type = "checkbox" name= "check" id ="check" class="check" onclick = "Mycheck()"></td>
                <td>${data[i].title}</td>
                <td></td>
                </tr>`;
            }
    
        }
        // Setting innerHTML as tab variable
        document.getElementById("todos").innerHTML = tab;
        var checkb = $('input[name=check]:checked').length;
                console.log(checkb);
    }}
    var count = 0;
    function Mycheck(){
        
   // $('.check').change(function(){
    
            const myPromise = new Promise((resolve, reject) =>{
            var checkbox = document.getElementById("check");
            if(checkbox.checked=="checked"){
                count = count +1;
            }
            console.log(count);
            var countr = $('input[name=check]:checked').length;
            console.log(countr);
            if(countr == 95){
                resolve("Congrats. 5 Tasks have been successfully completed!");
            }
            else{
                reject(countr-90);
            }
        
       });
        myPromise.then((message) => {
            alert(message);
        }).catch((message) => {
            console.log("Checkboxes checked:" + message);
        })
    //});
    
   // });
    }
