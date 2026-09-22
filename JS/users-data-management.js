import data from "../JS/mock-data.js"
const rawCurrentUser = localStorage.getItem("usersData")
const currentUser = JSON.parse(rawCurrentUser)
class dataUsersManagement{
    constructor(email,nationality="none",age='18',gender='Secret',total=0) {
        this.email=email;
        this.nationality=nationality;
        this.age=age;
        this.gender=gender;
        this.total=total;
    }
    addingUserData() {
        const userData = {email:this.email,nationality:this.nationality,age:this.age,gender:this.gender,total:0,avatar:"https://placehold.net/avatar-1.png"};
        currentUser.push(userData)
        localStorage.setItem("usersData",JSON.stringify(currentUser))
    }
    setCurrentUserData() {
        const rawUsersData=localStorage.getItem("usersData")
        const usersData = JSON.parse(rawUsersData)
        const currentUserData = usersData.filter(userData=>userData.email===this.email)
        localStorage.setItem("currentUserData",JSON.stringify(currentUserData[0]))
    }
    setUserData(userInfo,currentAccount,inputName,newAvatar) {
        const rawAccounts = localStorage.getItem("accounts")
        const accounts = JSON.parse(rawAccounts)
        const rawUsersData=localStorage.getItem("usersData")
        const usersData = JSON.parse(rawUsersData)
        userInfo = {email:this.email,nationality:this.nationality,age:this.age,gender:this.gender,total:0,avatar:`${newAvatar}`}
        for (let i = 0; i<rawAccounts.length;i++) {
            if (usersData[i].email===userInfo.email) {
                usersData[i]=userInfo
                currentAccount.name=inputName
                accounts[i].name=inputName
                localStorage.setItem("accounts",JSON.stringify(accounts))
                localStorage.setItem("usersData",JSON.stringify(usersData))
                localStorage.setItem("currentUserData",JSON.stringify(userInfo))
                localStorage.setItem("currentAccount",JSON.stringify(currentAccount))
                break;
            }
        }
        
    }
}
export default dataUsersManagement;