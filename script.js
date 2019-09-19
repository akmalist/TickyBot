// function pictureSwitch(change){
//     if(change==true){
//         document.getElementbyId("roboPic").src="images\robot.svg";

//     }else{
//         document.getElementbyId("roboPic").src="images\robot2.svg";
//     }
// }


// function pictureSwitch(change){
//     if(change==true){
//         document.getElementById("roboPic").src="images\robot.svg";
//     }else{
//     document.getElementById("roboPic").src="images\robot2.svg";
//     }
// }

function pictureSwitch(myImage){
  myImage.src="\images\robot.svg"
};

function mouseAway(myImage){
  myImage.src="\images\robot2.svg"
}



// function onHover(){
//   document.getElementsByClassName("bot-image").src = "images\robot2.svg";
// }

// function offHover(){
//   document.getElementsByClassName("bot-image").src = "images\robot2.svg";
// }

/* <div id="menu" >  
  <a href="#" id="home">
    <img id="menuImg" src="images/about.png" alt="logo" onmouseover="onHover();" 
      onmouseout="offHover();" />
  </a>
</div> */