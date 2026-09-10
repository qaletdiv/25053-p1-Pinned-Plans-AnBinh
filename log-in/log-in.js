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
