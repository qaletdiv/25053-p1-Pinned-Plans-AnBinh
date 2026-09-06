const settingsContainer=document.querySelector(".settings-container")
const interactionBox = document.querySelector(".interaction-close")
document.querySelector(".close-settings").addEventListener("click",()=>{
    settingsContainer.style.top="-100%"
    interactionBox.style.top="-100%"
})
document.querySelector(".settings-btn").addEventListener("click",()=>{
    settingsContainer.style.top="25vh"
    interactionBox.style.top="0"   
})

interactionBox.addEventListener("click",()=>{
    settingsContainer.style.top="-100%"
    interactionBox.style.top="-100%"
})
// const boardContainer = document.querySelector(".board-container")
// boardContainer.onmousedown = target => {
//     target.preventDefault()
//     let x = target.clientX 
//     let y = target.clientY
//     window.onmousemove = newTarget => {
//         newTarget.preventDefault()
//         let finalX = newTarget.clientX - x
//         let finalY = newTarget.clientY - y
//         boardContainer.style.top=`${boardContainer.offsetTop + finalY}px`
//         boardContainer.style.left=`${boardContainer.offsetLeft + finalX}px`
//         x = newTarget.clientX;
//         y = newTarget.clientY;
//     }
//     window.onmouseup = () => {
//         window.onmouseup=null;
//         window.onmousemove=null;
//     }
// }
