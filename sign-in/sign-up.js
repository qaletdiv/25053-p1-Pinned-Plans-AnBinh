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
const fullname = document.querySelector(".input-name")
const email = document.querySelector(".input-email")
const password = document.querySelector(".input-password")
const signUpContainer = document.querySelector(".sign-up-area")
const userInfos = [{name:"NguyenAnBinh",email:"wukong.dargon@gmail.com",password:"0708115625"}]
localStorage.setItem("users", JSON.stringify(userInfos))
document.querySelector(".sign-up-btn").addEventListener("click",()=>{
    let error = false;
    if (!checkError(error)) {
        addingUserInfo()
        setCurrentUser()
        window.location.href = "../main-page/main-page.html"
    }
})
const addingUserInfo = () => {
    userInfos.push({name: fullname.value, email: email.value, password: password.value})
    console.log(userInfos)
    localStorage.setItem("users", JSON.stringify(userInfos) )
}
function checkError(error) {
    let errorCount = 0;
    const resetNotification = document.querySelectorAll(".notification-error")
    resetNotification.forEach((element)=>{
        element.remove()
    })
    fullname.style.border = "1px solid black"
    email.style.border = "1px solid black"
    password.style.border = "1px solid black"
    if (!fullname.value.trim()) {
        const notification = document.createElement("p")
        notification.setAttribute("class","notification-error")
        notification.textContent="*Please write your name"
        fullname.style.border = "2px solid red"
        signUpContainer.appendChild(notification)
        errorCount +=1;
    }
    if (checkEmail(error)) {
        errorCount+=1
    }
    if (checkPassword(error)) {
        errorCount+=1
    }
    if (!errorCount) {
        return error=false
    }
    if (errorCount) {
        return error=true
    }
}
function checkEmail (error) {
    const inputEmail=email.value
    const notification = document.createElement("p")
    notification.setAttribute("class","notification-error")
    if (!inputEmail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        notification.textContent="*Please write a valid email"
        email.style.border = "2px solid red"
        signUpContainer.appendChild(notification)
        error=true;
        return error;
    }
    const users = JSON.parse(localStorage.getItem("users"))
    users.forEach(element=>{
        if (inputEmail===element.email) {
            notification.textContent="*This email already has an account"
            email.style.border = "2px solid red"
            signUpContainer.appendChild(notification)
            error=true;
            return error;
        }
    })
    return error;
}
function checkPassword(error) {
    const inputPassword = password.value
    const notification = document.createElement("p")
    notification.setAttribute("class","notification-error")
    if (inputPassword.includes(" ")) {
        notification.textContent="*Please don't use space in your password"
        password.style.border = "2px solid red"
        signUpContainer.appendChild(notification)
        return error=true;      
    }
    if (inputPassword.length===0) {
        notification.textContent="*Please write your password"
        password.style.border = "2px solid red"
        signUpContainer.appendChild(notification)
        return error=true;
    }
    if (inputPassword.length<8) {
        notification.textContent="*Your password need to contain 8 or more than 8 characters"
        password.style.border = "2px solid red"
        signUpContainer.appendChild(notification)
        return error=true;
    }
}
function setCurrentUser() {
    localStorage.setItem("currentUser",JSON.stringify({name: fullname.value, email: email.value, password: password.value}))
}