const testData = localStorage.getItem("accounts")
import data from "../JS/mock-data.js";

if (!testData) {
    localStorage.setItem("accounts", JSON.stringify(data.accounts))
    localStorage.setItem("usersData", JSON.stringify(data.usersData))
    localStorage.setItem("plans", JSON.stringify(data.plans))
    localStorage.setItem("currentAccount","")
    localStorage.setItem("currentUserData","")
    localStorage.setItem("currentUserPlans","")
    localStorage.setItem("currentPlan","")

window.location.href = "../main-page/main-page.html"
} else {
    window.location.href = "../main-page/main-page.html"
}