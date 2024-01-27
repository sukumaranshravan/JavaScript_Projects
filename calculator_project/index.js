var num_list = []

function show(number){           
            document.querySelector("#screen").innerHTML += number
            
 }

 function clean(){
    document.querySelector("#screen").innerHTML = ""
}

function add(operator){
    document.querySelector("#screen").innerHTML = operator
    var operation = operator
    return operation
}

function result(){
    var on_display = document.getElementById("screen").innerHTML
    
    document.querySelector("#screen").innerHTML = eval(on_display) 
   
}