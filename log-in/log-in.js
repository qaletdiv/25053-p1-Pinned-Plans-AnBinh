import basicAccountManagement from "../JS/accounts-management.js"
import dataUsersManagement from "../JS/users-data-management.js"
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
const inputUser = document.querySelector(".input-account")
const inputPassword = document.querySelector(".input-password")
document.querySelector(".log-in-btn").addEventListener("click",()=>{
    checkInputError()
})
const rawListOfAccounts = localStorage.getItem("accounts")
const listOfAccounts = JSON.parse(rawListOfAccounts)
function checkInputError() {
    let emailError = true;
    let passwordError = true;
    inputUser.classList.remove("error-area")
    inputPassword.classList.remove("error-area")
    inputUser.textContent="1px solid black"
    inputPassword.textContent="1px solid black"
    const resetNotification = document.querySelectorAll(".notification-error")
    resetNotification.forEach((element)=>{
        element.remove()
    })
    const notification = document.createElement("p")
    notification.setAttribute("class","notification-error")
    listOfAccounts.forEach(c => {
        if (c.email===inputUser.value) {
            emailError = false
            if ((c.password===inputPassword.value)) {
                passwordError = false
                const setAccount = new basicAccountManagement(c.name,c.email,c.password)
                setAccount.setCurrentAccount()   
                const userData = new dataUsersManagement(c.email)
                userData.setCurrentUserData()
                return;
    }}})
    if (emailError) {
        addingErrorContext('*This account does not exist',notification)        
    } else if (passwordError) {
        notification.textContent='*Your password is incorrect'
        inputUser.classList.add("error-area")
        inputPassword.classList.add("error-area")
        inputUser.parentNode.append(notification)
    }
}
function addingErrorContext(context,notification) {
        notification.textContent= context
        inputUser.classList.add("error-area")
        inputPassword.classList.add("error-area")
        inputUser.parentNode.append(notification)
}


