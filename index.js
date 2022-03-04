// document.querySelectorAll(".myButton")[0].addEventListener("click",function(){

//     var text = this.innerHTML;

//     document.querySelector("h1").innerHTML= text +  "is clicked ";

// });

// document.querySelectorAll(".myButton")[1].addEventListener("click",function(){

//     var text = this.innerHTML;

//     document.querySelector("h1").innerHTML= text +  "is clicked ";

// });

// document.querySelectorAll(".myButton")[2].addEventListener("click",function(){

//     var text = this.innerHTML;

//     document.querySelector("h1").innerHTML= text +  "is clicked ";

// });

var leng = document.querySelectorAll(".mybutton").length

for( var leng =0 ; leng < 3 ;  leng++ ){

    document.querySelectorAll(".myButton")[leng].addEventListener("click",function(){
        
        var text = this.innerHTML;
        
        document.querySelector("h1").innerHTML =text + "is clicked"

    })
}

var text = document.querySelector("#para");

var heading = document.querySelector("#head");

function myFunction1() {

    text.classList.add("class")
    heading.classList.add("class")

}

function myFunction2() {

    text.classList.remove("class")
    heading.classList.remove("class")

}