const rawPlans = localStorage.getItem("plans")
const plans = JSON.parse(rawPlans)
class  plansBriefManagement {
    constructor(email, planName, desc, date, background, border,ratio) {
        this.email=email
        this.planName=planName
        this.desc=desc
        this.date=date
        this.background=background
        this.border=border
        this.ratio=ratio
    }
    setUserPlans() {
        const currentUserPlans = plans.filter(plan=>plan.ID.includes(this.email))
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = currentUserPlans.length
        usersData.forEach( user=> {
            if (user.email === this.email) {
                user.total = currentUserPlans.length
                return;
            }
        });
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))
    }
    createPlan() {
        const rawCurrentUserPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans =[]
        let index = 1
        if (rawCurrentUserPlans) {
            currentUserPlans= JSON.parse(rawCurrentUserPlans)
            if (currentUserPlans[0]) {
                const lastPlanId = currentUserPlans[currentUserPlans.length-1].ID
                index = Number(lastPlanId.match(/\d+$/)[0]) + 1
            }
        }
        const currentPlan = {ID:`${this.email}${index}`, planName:this.planName, description: this.desc, Date: this.date, background:this.background, borderColor:this.border, ratio: this.ratio}
        currentUserPlans.push(currentPlan)
        plans.push(currentPlan)
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
        localStorage.setItem("plans",JSON.stringify(plans))
        localStorage.setItem("currentPlan",JSON.stringify(currentPlan))
        window.location.href = "../plans-management/plans-management.html"
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = currentUserPlans.length
        usersData.forEach( user=> {
            if (user.email === CurrentUserData.email) {
                user.total = currentUserPlans.length
                return;
            }
        });
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))
    }
    adjustPlanInfo(ID,name,desc,updatedDate) {
        const rawPlans = localStorage.getItem('plans')
        let plans = JSON.parse(rawPlans)
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans = JSON.parse(rawCurrentPlans)
        plans.forEach(plan=> {
            if (plan.ID===ID) {
                plan.planName=name;
                plan.description=desc;
                plan.Updated=updatedDate
            }
        })
        currentUserPlans.map(plan=>{
                if (plan.ID===ID) {
                plan.planName=name;
                plan.description=desc;
                plan.Updated=updatedDate
            }
        })
        localStorage.setItem("plans",JSON.stringify(plans))
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
    }
    removePlan(ID) {
        const rawPlans = localStorage.getItem('plans')
        let plans = JSON.parse(rawPlans)
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans = JSON.parse(rawCurrentPlans)
        const newPlans = plans.filter(plan=>plan.ID!=ID)
        const newCurrentPlans = currentUserPlans.filter(plan=>plan.ID!=ID)
        localStorage.setItem("plans",JSON.stringify(newPlans))
        localStorage.setItem("currentUserPlans",JSON.stringify(newCurrentPlans))
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = currentUserPlans.length
        usersData.forEach( user=> {
            if (user.email === CurrentUserData.email) {
                user.total = currentUserPlans.length
                return;
            }
        });
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))     

    }
    setCurrentPlan(ID) {
        const currentPlan = plans.filter(plan=>plan.ID===ID)
        localStorage.setItem("currentPlan",JSON.stringify(currentPlan[0]))
    }
}
export default plansBriefManagement;