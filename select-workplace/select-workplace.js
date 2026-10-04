import plansBriefManagement from "../JS/brief-plans-information.js"
import verify from "../JS/verify-account.js"
verify.verifyAccount()


const createWorkplaceArea = document.querySelector(".generate-new-workplace")
document.querySelector(".close").addEventListener("click", () => {
    createWorkplaceArea.style.top = "-50%"
    const rawName = document.querySelector(".planName")
    const rawDesc = document.querySelector(".description")
    const notificationCount = document.querySelector(".error-notification")
    const backgroundImage = document.querySelector(".background-image")
    rawName.style.border = "1px solid gray"
    if (notificationCount) {
        notificationCount.remove()
    }
    previewBoard.style.border = "0.4rem solid #6b3000"
    previewBoard.style.background = "#DEB887"
    rawBorder.value = "#6b3000"
    backgroundColor.value = "#DEB887"
    previewBoard.style.height = "25rem"
    previewBoard.style.width = "25rem"
    rawName.value = ''
    rawDesc.value = ''
    rawRatio.value = "1/1"
    borderRequirement.value = "Border"
    rawBorder.style.display = "block"
    background = "#DEB887"
    border = "#6b3000"
    trueRatio = "1/1"
    typeOfBackground.value = "Solid color"
    backgroundColor.style.display = "block"
    backgroundImage.style.display = "none"
})
document.querySelector(".create-workplace").addEventListener("click", () => {
    createWorkplaceArea.style.top = "50%"
})




document.querySelector(".workplace-selection").addEventListener("click", () => window.location.href = "../plans-management/plans-management.html")
let trueRatio = "1/1"
const rawRatio = document.querySelector(".ratio")
const previewBoard = document.querySelector(".preview-board")
rawRatio.addEventListener("change", () => {
    trueRatio = rawRatio.value
    if (trueRatio === "1/1") {
        previewBoard.style.height = "25rem"
        previewBoard.style.width = "25rem"
        return;
    }
    if (trueRatio === "4/3") {
        previewBoard.style.height = "25rem"
        previewBoard.style.width = "18.75rem"
        return;
    }
    if (trueRatio === "3/4") {
        previewBoard.style.height = "18.75rem"
        previewBoard.style.width = "25rem"
        return;
    }
    if (trueRatio === "3/2") {
        previewBoard.style.height = "25rem"
        previewBoard.style.width = `${50 / 3}rem`
        return;
    }
    if (trueRatio === "2/3") {
        previewBoard.style.height = `${50 / 3}rem`
        previewBoard.style.width = "25rem"
        return;
    }
})



let background = "#DEB887"
const typeOfBackground = document.querySelector(".background-type")
const backgroundColor = document.querySelector(".background-color")
backgroundColor.value = "#DEB887"
backgroundColor.addEventListener("change", () => {
    previewBoard.style.background = `${backgroundColor.value}`
    background = backgroundColor.value
})
typeOfBackground.addEventListener("change", () => {
    const backgroundImage = document.querySelector(".background-image")
    if (typeOfBackground.value === "Image(demo)") {
        backgroundColor.style.display = "none"
        backgroundImage.style.display = "block"
        backgroundImage.addEventListener("keyup", () => {
            previewBoard.style.backgroundImage = `url(${backgroundImage.value})`
            background = backgroundImage.value
        })
        return
    }
    if (typeOfBackground.value === "Solid color") {
        backgroundColor.style.display = "block"
        backgroundImage.style.display = "none"

        return
    }
})



let border = "#6b3000"
const rawBorder = document.querySelector(".border")
rawBorder.value = "#6b3000"
const borderRequirement = document.querySelector(".border-requirement")
previewBoard.style.border = `0.4rem solid ${rawBorder.value}`
border = rawBorder.value
rawBorder.addEventListener("change", () => {
    previewBoard.style.border = `0.4rem solid ${rawBorder.value}`
    border = rawBorder.value
})
borderRequirement.addEventListener("change", () => {
    if (borderRequirement.value === "None") {
        rawBorder.style.display = "none"
        previewBoard.style.border = "none"
        border = ""
        return
    }
    if (borderRequirement.value === "Border") {
        rawBorder.style.display = "block"
        previewBoard.style.border = `0.4rem solid ${rawBorder.value}`
        border = rawBorder.value
        return;
    }
})
document.querySelector(".reset").addEventListener("click", () => {
    const rawName = document.querySelector(".planName")
    const rawDesc = document.querySelector(".description")
    const notificationCount = document.querySelector(".error-notification")
    const backgroundImage = document.querySelector(".background-image")
    rawName.style.border = "1px solid gray"
    if (notificationCount) {
        notificationCount.remove()
    }
    previewBoard.style.border = "0.4rem solid #6b3000"
    previewBoard.style.background = "#DEB887"
    rawBorder.value = "#6b3000"
    backgroundColor.value = "#DEB887"
    previewBoard.style.height = "25rem"
    previewBoard.style.width = "25rem"
    rawName.value = ''
    rawDesc.value = ''
    rawRatio.value = "1/1"
    borderRequirement.value = "Border"
    rawBorder.style.display = "block"
    background = "#DEB887"
    border = "#6b3000"
    trueRatio = "1/1"
    typeOfBackground.value = "Solid color"
    backgroundColor.style.display = "block"
    backgroundImage.style.display = "none"
})
document.querySelector(".generate").addEventListener("click", () => {
    const rawName = document.querySelector(".planName")
    const rawDesc = document.querySelector(".description")
    rawName.style.border = "1px solid gray"
    const notificationCount = document.querySelector(".error-notification")
    const rawCurrentUserPlans = localStorage.getItem("currentUserPlans")
    if (notificationCount) {
        notificationCount.remove()
    }
    if (rawName.value.trim().length === 0) {
        const notification = document.createElement("p")
        notification.setAttribute("class", "error-notification")
        notification.textContent = "*Please write your project's name"
        rawName.parentNode.append(notification)
        rawName.style.border = "2px solid red"
        return
    }
    
    if (rawCurrentUserPlans) {
        const currentUserPlans = JSON.parse(rawCurrentUserPlans)
        const verifyName = currentUserPlans.filter(plan => plan.planName === rawName.value)
        if (verifyName.length) {
            const notification = document.createElement("p")
            notification.setAttribute("class", "error-notification")
            notification.textContent = "*Your project's name is already used"
            rawName.parentNode.append(notification)
            rawName.style.border = "2px solid red"
            return
        }
    }
    const rawCurrentUser = localStorage.getItem("currentAccount")
    const currentUser = JSON.parse(rawCurrentUser)
    const date = new Date()
    const day = String(date.getDate())
    const month = String(date.getMonth() + 1)
    const year = String(date.getFullYear())
    const createdDate = `${day}/${month}/${year}`
    const createPlan = new plansBriefManagement(currentUser.email, rawName.value, rawDesc.value, createdDate, background, border, trueRatio)
    createPlan.createPlan()
})