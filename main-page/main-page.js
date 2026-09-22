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
const rawCurrentAccount = localStorage.getItem("currentAccount")
if (!rawCurrentAccount) {
    document.querySelector('.main-btn').setAttribute("href","../function-page/function-page.html")
    document.querySelector('.account-center').style.display='none'
    document.querySelector('.storage').style.display='none'
    document.querySelector('.log-out').style.display='none'
} else if (rawCurrentAccount.length!=0) {
    const trueCurrentAccount = JSON.parse(rawCurrentAccount)
    document.querySelector('.main-btn').setAttribute("href","../account-center/account-center.html")
    document.querySelector('.account-center').style.display='block'
    document.querySelector('.storage').style.display='block'
    document.querySelector('.log-out').style.display='block'
    document.querySelector('.into-account').style.display='none'
    document.querySelector('.hello-user').textContent=`Hello ${trueCurrentAccount.name} !`
}
document.querySelector(".log-out").addEventListener("click",() => {
    localStorage.setItem("currentAccount","")
    localStorage.setItem("currentUserData","")
    window.location.href = "../log-in/log-in.html"
})

