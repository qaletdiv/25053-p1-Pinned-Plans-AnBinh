import dataUsersManagement from "../JS/users-data-management.js"
import basicAccountManagement from "../JS/accounts-management.js"
import verify from "../JS/verify-account.js"

verify.verifyAccount()


const rawUserData = localStorage.getItem("currentUserData")
const userInfo = JSON.parse(rawUserData)
const rawCurrentAccount = localStorage.getItem("currentAccount")
const currentAcount = JSON.parse(rawCurrentAccount)


const adjustBtn = document.querySelector(".adjust-btn")
const finishBtn = document.querySelector(".finish-btn")
const userName = document.querySelector(".name")
const nationality = document.querySelector(".nationality")
const age = document.querySelector(".age")
const gender = document.querySelector(".gender")
const totalPlans = document.querySelector(".total")
const avatar = document.querySelector(".avatar")

const inputName = document.querySelector(".input-name")
const inputNationality = document.querySelector(".input-nationality")
const inputAge = document.querySelector(".input-age")
const inputGender = document.querySelector(".gender-selection")
const inputAvatar = document.getElementById("input-avatar")
inputAvatar.addEventListener("change", () => {
    let newAvatar = URL.createObjectURL(inputAvatar.files[0])
    avatar.setAttribute("src", String(newAvatar))
})

const accountArea = document.querySelector(".account-area")

function setPlaceholder(element, inputElement) {
    inputElement.setAttribute("placeholder", element)
}
userName.textContent = currentAcount.name
nationality.textContent = userInfo.nationality;
age.textContent = userInfo.age;
gender.textContent = userInfo.gender;
avatar.setAttribute("src", userInfo.avatar)


adjustBtn.addEventListener("click", () => {
        const collectionOfData = document.querySelectorAll(".info")
        const inputData = document.querySelectorAll(".input-data")
        collectionOfData.forEach(e => {
            e.style.display = "none"
        })
        inputData.forEach(a => {
            a.style.display = "block"
        })
        finishBtn.style.display = "block"
        adjustBtn.style.display = "none"
        setPlaceholder(currentAcount.name, inputName)
        setPlaceholder(userInfo.nationality, inputNationality)
        setPlaceholder(userInfo.age, inputAge)
        setPlaceholder(userInfo.gender, inputGender)
        inputName.value = userName.textContent;
        inputNationality.value = nationality.textContent;
        inputAge.value = age.textContent;
        inputGender.value = gender.textContent;
    }
)
finishBtn.addEventListener("click", () => {
    const collectionOfData = document.querySelectorAll(".info")
    const inputData = document.querySelectorAll(".input-data")
    const recheckAnouce = document.querySelector(".recheck")
    let errorCount = false;
    if (!checkError(errorCount)) {
        recheckAnouce.style.top = "50%"
        document.querySelector(".guarantee-btn").addEventListener("click", () => {
            collectionOfData.forEach(e => {
                e.style.display = "block"
            })
            inputData.forEach(a => {
                a.style.display = "none"
            })
            recheckAnouce.style.top = "-50%"
            finishBtn.style.display = "none"
            adjustBtn.style.display = "block"
            userName.textContent = inputName.value;
            nationality.textContent = inputNationality.value;
            age.textContent = inputAge.value;
            gender.textContent = inputGender.value;
            let newAvatar = avatar.getAttribute("src")
            const fixedUserData = new dataUsersManagement(currentAcount.email, inputNationality.value, inputAge.value, inputGender.value)
            fixedUserData.setUserData(userInfo, currentAcount, inputName.value, newAvatar)
        })
        document.querySelector(".recheck-btn").addEventListener("click", () => {
            recheckAnouce.style.top = "-50%"
        })
    }
})
function checkError(errorCount) {
    const notificationCount = document.querySelectorAll(".notification-error")
    if (notificationCount.length != 0) {
        document.querySelectorAll(".notification-error").forEach(notify => {
            notify.remove()
            inputName.style.border = "1px solid rgba(0, 0, 0, 0.356)"
            inputNationality.style.border = "1px solid rgba(0, 0, 0, 0.356)";
            inputAge.style.border = "1px solid rgba(0, 0, 0, 0.356)"
        })
    }

    if (inputName.value.trim().length === 0) {
        const notification = document.createElement("p")
        notification.setAttribute("class", "notification-error")
        notification.textContent = "*Please write your name"
        userName.parentNode.appendChild(notification)
        inputName.style.border = "2px solid red"
        errorCount = true;
    }
    if (inputNationality.value.trim().length === 0) {
        const notification = document.createElement("p")
        notification.setAttribute("class", "notification-error")
        notification.textContent = "*Please state your nationality"
        nationality.parentNode.appendChild(notification)
        inputNationality.style.border = "2px solid red"
        errorCount = true;
    }
    if (inputAge.value.trim().length === 0) {
        const notification = document.createElement("p")
        notification.setAttribute("class", "notification-error")
        notification.textContent = "*Please enter your age"
        age.parentNode.appendChild(notification)
        inputAge.style.border = "2px solid red"
        errorCount = true;
    }
    return errorCount;
}





//password
const passwordChangingArea = document.querySelector(".change-password-area")
document.querySelector(".change-password-btn").addEventListener("click", () => {
    passwordChangingArea.style.top = "50%"
})
document.querySelector(".close-p-area").addEventListener("click", () => {
    passwordChangingArea.style.top = "-50%"
    inputConfirmPassword.value=""
    inputNewPassword.value=""
    inputOldPassword.value=""
    const notificationForPasswordCount = document.querySelectorAll(".notification-error-for-password")
    if (notificationForPasswordCount.length!=0) {
        notificationForPasswordCount.forEach(e=>e.remove())
        inputOldPassword.style.border="1px solid gray"
        inputNewPassword.style.border="1px solid gray"
        inputConfirmPassword.style.border="1px solid gray"
    }
})
const inputOldPassword = document.querySelector(".input-old-password")
const inputNewPassword = document.querySelector(".input-new-password")
const inputConfirmPassword = document.querySelector(".input-confirm-password")
document.querySelector(".reset-password").addEventListener("click",()=>{
    inputOldPassword.value=""
    inputNewPassword.value=""
    inputConfirmPassword.value=""
})
document.querySelector(".confirm-change").addEventListener("click",()=>{
    const notificationForPasswordCount = document.querySelectorAll(".notification-error-for-password")
    if (notificationForPasswordCount.length!=0) {
        notificationForPasswordCount.forEach(e=>e.remove())
        inputOldPassword.style.border="1px solid gray"
        inputNewPassword.style.border="1px solid gray"
        inputConfirmPassword.style.border="1px solid gray"
    }
    if (currentAcount.password!=inputOldPassword.value) {
        const notificationForPassword = document.createElement("p")
        notificationForPassword.setAttribute("class", "notification-error-for-password")
        notificationForPassword.textContent="*Your old password is incorrect!"
        passwordChangingArea.appendChild(notificationForPassword)
        inputOldPassword.style.border="2px solid red"
        return
    }
    if (inputNewPassword.value.trim()<8) {
        const notificationForPassword = document.createElement("p")
        notificationForPassword.setAttribute("class", "notification-error-for-password")
        notificationForPassword.textContent="*Your password must be more than 8 characters!"
        passwordChangingArea.appendChild(notificationForPassword)
        inputNewPassword.style.border="2px solid red"
        return
    }
    if (inputNewPassword.value.trim()===inputOldPassword.value.trim()) {
        const notificationForPassword = document.createElement("p")
        notificationForPassword.setAttribute("class", "notification-error-for-password")
        notificationForPassword.textContent="*Your password must be different from the old one!"
        passwordChangingArea.appendChild(notificationForPassword)
        inputNewPassword.style.border="2px solid red"
        return
    }
    if (!(inputNewPassword.value===inputConfirmPassword.value)) {
        const notificationForPassword = document.createElement("p")
        notificationForPassword.setAttribute("class", "notification-error-for-password")
        notificationForPassword.textContent="*Your confirm password is incorrect!"
        passwordChangingArea.appendChild(notificationForPassword)
        inputNewPassword.style.border="2px solid red"
        inputConfirmPassword.style.border="2px solid red"
        return
    }
    currentAcount.password=inputNewPassword.value
    const changePasswordConfirmation = new basicAccountManagement()
    changePasswordConfirmation.changePassword(currentAcount)
    passwordChangingArea.style.top = "-50%"
    inputConfirmPassword.value=""
    inputNewPassword.value=""
    inputOldPassword.value=""
})
document.querySelector(".log-out-btn").addEventListener("click",()=>{
    localStorage.setItem("currentAccount","")
    localStorage.setItem("currentUserData","")
    window.location.href = "../log-in/log-in.html"
})


