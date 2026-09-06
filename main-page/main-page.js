document.querySelector(".close-box").addEventListener("click",()=>{
    const contentBox = document.querySelector(".box")
    contentBox.style.top="-100%";
    const interactBox = document.querySelector(".interact-box")
    interactBox.style.top="-100%";
})
document.querySelector(".interact-box").addEventListener("click",()=>{
    const contentBox = document.querySelector(".box")
    contentBox.style.top="-100%";
    const interactBox = document.querySelector(".interact-box")
    interactBox.style.top="-100%";
})
document.querySelector(".contacts").addEventListener("click",()=>{
    const contentBox = document.querySelector(".box")
    contentBox.style.top="0";
    const interactBox = document.querySelector(".interact-box")
    interactBox.style.top="0";
    const contactsContainer = document.querySelector(".contacts-info")
    contactsContainer.style.display="block";
})
document.querySelector(".howtouse").addEventListener("click",()=>{
    const contentBox = document.querySelector(".box")
    contentBox.style.top="0";
    const interactBox = document.querySelector(".interact-box")
    interactBox.style.top="0";
    const contactsContainer = document.querySelector(".contacts-info")
    contactsContainer.style.display="none";
})