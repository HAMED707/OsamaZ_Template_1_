//toggle spin for icon gear

document.querySelector(".icons_container  .problem").onclick = function(){
    
    
    this.classList.toggle("fa-spin");
    
    // to open box setting
    document.querySelector(".setting_box").classList.toggle("open");

};
//switch colors
//                         this like array \ /
const colorsLi =document.querySelectorAll(".colors_list li")

//loop in color
colorsLi.forEach(li => {
    //click on every items
    addEventListener("click",(e)=>{
        
        console.log(e.target.dataset.color)
        //set color on root
        if(e.target.dataset.color==undefined){e.stop();}
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
    });
});

// select landing page

let landingPage=document.querySelector(".landing_page");


// array of img

let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg"];

// change background img URL

landingPage.style.backgroundImage = 'url("images/04.jpg")';



setInterval(function(){
    // get random number
let = randomNumber=Math.floor(Math.random()*imgsArray.length);

// change background img URL

landingPage.style.backgroundImage = 'url("images/'+imgsArray[randomNumber]+'")';
},5000);