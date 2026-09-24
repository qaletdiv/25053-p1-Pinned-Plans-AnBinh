const rawCurrentAccount = localStorage.getItem("currentAccount")
function verifyAccount() {
    if (!rawCurrentAccount){
        window.location.href = "../log-in/log-in.html"
    }
}
function verifyGuest() {
    if (rawCurrentAccount) {
        window.location.href = "../account-center/account-center.html"
    }
}
export default {verifyAccount,verifyGuest};