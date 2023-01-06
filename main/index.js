const background = document.querySelector(".top-contents");
const dashHeader = document.querySelector(".dash-header");
const statsCard = document.querySelectorAll(".card");
const overviewCard = document.querySelectorAll(".overview-card");
const nameLabel = document.querySelectorAll(".name");
const numberLabel = document.querySelectorAll(".numbers");
const audience = document.querySelectorAll(".audience");
const ballContainer = document.querySelector(".ball-container");
const ball = document.querySelector(".ball");

ballContainer.addEventListener("click",()=>{
    if(ballContainer.classList.contains("ball-container-bg")){
        document.body.classList.remove("topContentBg")
        background.classList.remove("topSecBg");
        dashHeader.classList.remove("dashboardHeader");
        for(let x=0;x< statsCard.length; x++) {
            statsCard[x].classList.remove("toggledCard");
        }
        for(let x=0;x< overviewCard.length; x++) {
            overviewCard[x].classList.remove("toggledCard");
        }
        for(let i=0;i< nameLabel.length; i++) {
            nameLabel[i].classList.remove("toggledP");
        }
        for(let x=0;x< numberLabel.length; x++) {
            numberLabel[x].classList.remove("toggledNumbers");
        }
        for(let x=0;x< audience.length; x++) {
            audience[x].classList.remove("toggledAudience");
        }
        ballContainer.classList.remove("ball-container-bg");
        ball.classList.remove("toggleBallPosition");
        console.log(ballContainer.classList);
    }else {
        document.body.classList.add("topContentBg");
        background.classList.add("topSecBg");
        dashHeader.classList.add("dashboardHeader");
        for(let x=0;x < statsCard.length; x++) {
            statsCard[x].classList.add("toggledCard");
        }
        for(let x=0;x < overviewCard.length; x++) {
            overviewCard[x].classList.add("toggledCard");
        }
        for(let i=0;i < nameLabel.length; i++) {
            nameLabel[i].classList.add("toggledP");
        }
        for(let x=0;x < numberLabel.length; x++) {
            numberLabel[x].classList.add("toggledNumbers");
        }
        for(let x=0;x < audience.length; x++) {
            audience[x].classList.add("toggledAudience");
        }
        ballContainer.classList.add("ball-container-bg");
        ball.classList.add("toggleBallPosition");
    }
})