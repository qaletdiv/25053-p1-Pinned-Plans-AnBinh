import data from "../JS/mock-data.js";
localStorage.setItem("accounts", JSON.stringify(data.accounts))
localStorage.setItem("usersData", JSON.stringify(data.usersData))
localStorage.setItem("currentAccount","")
localStorage.setItem("currentUserData","")
window.location.href = "../main-page/main-page.html"