import data from "../JS/mock-data.js";
const rawAccounts = localStorage.getItem("accounts")
const accounts = JSON.parse(rawAccounts)
class basicAccountManagement {
    constructor(name,email,password) {
        this.name=name;
        this.email=email;
        this.password=password;
    }
    addingAccount() {
        accounts.push({name: this.name, email: this.email, password: this.password})
        localStorage.setItem("accounts", JSON.stringify(accounts) )
    }
    setCurrentAccount() {
        localStorage.setItem("currentAccount",JSON.stringify({name: this.name, email: this.email, password: this.password}))
        window.location.href = "../account-center/account-center.html"
    }
}

export default basicAccountManagement;
