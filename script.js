


var pg1= document.querySelector(".main")
var crsr= document.querySelector(".cursor")

pg1.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


gsap.from( ".boxb", {
x:1000,
rotate:360,
duretion:7,
delay:5
})
gsap.from(".left",{
    y:-100,
    duretion:2,
    stagger:0.1,
    opacity:-1,
    delay:0.3


})


var tl= gsap.timeline()

tl.from(".logo",{
   y:-30,
    duretion:2,
scale:0.7,
    opacity:0,
    

})
tl.from(".nav2",{
   y:30,
    duretion:2,
scale:0.7,
    opacity:0,
  

})



tl.from(".right",{
   
    duretion:2,
scale:0.7,
    opacity:0,


})


var elem=document.querySelectorAll(".elem")


elem.forEach(function(val) {

    console.log(val.childNodes[3])
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1

    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
        
    })

    val.addEventListener("mousemove", function(dets){

        val.childNodes[3].style.left=dets.x+"px"
         //    val.childNodes[3].style.top=dets.y+"px"

    })



});


var anu=document.querySelector(".container")

anu.forEach(function(value){
    console.log(value.childNodes)

    
})








































/*
function abcd(){

}

var ans=(function(){
    var privatevariable= 12;
    return{
gatter:function(){
    console.log(privatevariable);

},
satter:function(val){
    privatevariable=val;
}

    }
})()


var student={
    name:"aniket"

}
















var a= document.querySelector("h1")
a.addEventListener("click",function(){
    a.innerHTML="pradnya kesi he tu suna he tu to or bhi stylish ho gai he  "
a.style.background="purple"
a.style.color="white"
a.style.fontSize="45px"
})

var bulb=document.querySelector("#bulb")
var btn=document.querySelector("#btn")

var flag=0
var g=0

function buttoncolor(){
btn()
    btn.style.background="red"
}


btn.addEventListener("click",function(){
    if(flag==0){
bulb.style.background="yellow"
console.log("clickoud")
flag=1
    }
    else{
        bulb.style.backgroundColor=" rgb(18, 118, 206)"
        console.log("again clickoud")
        flag=0
    }

})



*/