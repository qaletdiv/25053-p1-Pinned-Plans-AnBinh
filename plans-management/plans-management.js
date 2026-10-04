import plansBriefManagement from "../JS/brief-plans-information.js"


const rawCurrentUserPlans = localStorage.getItem("currentUserPlans")
if (!rawCurrentUserPlans) {
    window.location.href = "../select-workplace/select-workplace.html"
}
const currentUSerPlans = JSON.parse(rawCurrentUserPlans)
let displayPlans = []
displayPlans = currentUSerPlans
displayPlan()
function displayPlan() {
    const plansContainer = document.querySelector(".plans-container")
    const previousDisplayPlans = document.querySelectorAll(".plan")
    if (previousDisplayPlans) {
        previousDisplayPlans.forEach(plan => plan.remove())
    }
    displayPlans.forEach(plan => {
        const planContainer = document.createElement("div")
        planContainer.setAttribute("class", `${plan.ID} plan`)
        planContainer.dataset.planID = plan.ID
        const datesContainer = document.createElement("div")
        datesContainer.classList.add("dates")
        const createdDate = document.createElement("p")
        createdDate.classList.add("created")
        createdDate.textContent = `Created: ${plan.Date}`
        datesContainer.appendChild(createdDate)
        const updatedDate = document.createElement("p")
        updatedDate.classList.add("updated")
        if (plan.Updated) {
            updatedDate.textContent = `Updated: ${plan.Updated}`
        }
        datesContainer.appendChild(updatedDate)
        const previewBoard = document.createElement("div")
        previewBoard.classList.add("plan-preview")
        switch (plan.ratio) {
            case "1/1":
                previewBoard.style.height = "6.5rem"
                previewBoard.style.width = "6.5rem"
                break;
            case "4/3":
                previewBoard.style.height = "6.5rem"
                previewBoard.style.width = "4.875rem"
                break;
            case "3/4":
                previewBoard.style.height = "4.875rem"
                previewBoard.style.width = "6.5rem"
                break;
            case "2/3":
                previewBoard.style.height = `${13 / 3}rem`
                previewBoard.style.width = "6.5rem"
                break;
            case "3/2":
                previewBoard.style.height = "6.5rem"
                previewBoard.style.width = `${13 / 3}rem`
                break;
            default:
                break;
        }
        previewBoard.style.backgroundColor = `${plan.background}`
        if (plan.borderColor) {
            previewBoard.style.border = `0.4rem solid ${plan.borderColor}`
        }
        const planTitle = document.createElement("h3")
        planTitle.classList.add("plan-name")
        planTitle.textContent = `${plan.planName}`
        const planDesc = document.createElement("p")
        planDesc.classList.add("plan-description")
        planDesc.textContent = `${plan.description}`
        planContainer.appendChild(datesContainer)
        planContainer.appendChild(previewBoard)
        planContainer.appendChild(planTitle)
        planContainer.appendChild(planDesc)
        plansContainer.appendChild(planContainer)
    });
    menuTools()
}
const searchingTool = document.querySelector(".keywords")
searchingTool.addEventListener("keyup", () => {
    const inputKeywords = searchingTool.value.trim()
    if (!inputKeywords) {
        displayPlans = currentUSerPlans
        displayPlan()
        return;
    }
    if (inputKeywords) {
        let keywords = inputKeywords.trim().toLowerCase().replaceAll(/\s+/g, " ")
        displayPlans = currentUSerPlans.filter(plan => plan.planName.trim().toLowerCase().replaceAll(/\s+/g, " ").includes(keywords))
        displayPlan()
        return;
    }
})
function menuTools() {
    const menu = document.querySelector(".menu-activities")
    const getAllPlans = document.querySelectorAll(".plan")
    const info = document.querySelector(".view")
    let planID = ''

    if ((/android|iphone|ipad|ipod/i.test(navigator.userAgent.toLocaleLowerCase())) || (navigator.maxTouchPoints > 0)) {
        getAllPlans.forEach(planContainer => {
        planContainer.addEventListener("click", mouse => {
            const openMenu = setTimeout(() => {
                planID = planContainer.dataset.planID
                menu.classList.add("activated")
                const rawPlans = localStorage.getItem("currentUserPlans")
                const plans = JSON.parse(rawPlans)
                plans.forEach(plan => {
                    if (plan.ID === planID) {
                        document.querySelector(".menu-name").textContent=`${plan.planName}`
                    return
                }
                })
                menu.style.left = `${mouse.clientX}px`
                menu.style.top = `${mouse.clientY}px`
            }, 50)
        })
    })
    } else {
        getAllPlans.forEach(planContainer => {
            planContainer.addEventListener("contextmenu", mouse => {
                planID = planContainer.dataset.planID
                mouse.preventDefault()
                const rawPlans = localStorage.getItem("currentUserPlans")
                const plans = JSON.parse(rawPlans)
                plans.forEach(plan => {
                    if (plan.ID === planID) {
                        document.querySelector(".menu-name").textContent=`${plan.planName}`
                    return
                }
                })
                menu.classList.add("activated")
                menu.style.left = `${mouse.clientX}px`
                menu.style.top = `${mouse.clientY}px`
            })
        })
        getAllPlans.forEach(planContainer => {
            planContainer.addEventListener("click", plan => {
                planID = planContainer.dataset.planID
                const setCurrentPlan = new plansBriefManagement()
                setCurrentPlan.setCurrentPlan(planID)
                window.location.href = "../plans-management/plans-management.html"
                return
            })
        })
    }
    document.querySelector(".view-plan").addEventListener("click", () => {
        info.classList.add("view-activated")
        document.querySelector(".info").style.display = 'block'
        document.querySelector(".edit").style.display = 'none'
        document.querySelector(".delete").style.display = 'none'
        const name = document.querySelector(".name")
        const createdDate = document.querySelector(".created-date")
        const updatedDate = document.querySelector(".updated-date")
        const description = document.querySelector(".desc")
        const rawPlansInfo = localStorage.getItem("currentUserPlans")
        const plansInfo = JSON.parse(rawPlansInfo)
        for (const plan of plansInfo) {
            if (plan.ID === planID) {
                createdDate.textContent = `${plan.Date}`
                if (plan.Updated) {
                    updatedDate.textContent = `${plan.Updated}`
                } else {
                    updatedDate.textContent = ``
                }
                name.textContent = `${plan.planName}`
                description.textContent = `${plan.description}`
                break;
            }
        }
    })
    document.querySelector(".edit-plan").addEventListener("click", () => {
        info.classList.add("view-activated")
        document.querySelector(".info").style.display = 'none'
        document.querySelector(".edit").style.display = 'block'
        document.querySelector(".delete").style.display = 'none'
        const inputName = document.querySelector(".input-name")
        const inputDesc = document.querySelector(".input-desc")
        const rawPlans = localStorage.getItem("currentUserPlans")
        const plans = JSON.parse(rawPlans)

        plans.forEach(plan => {
            if (plan.ID === planID) {
                inputName.value = plan.planName
                inputDesc.value = plan.description
                return
            }
        })
        document.querySelector(".confirm").addEventListener("click", () => {
            console.log("ok")
            const notificationCount = document.querySelector(".error")
            if (notificationCount) {
                notificationCount.remove()
                inputName.style.border = "1px solid gray"
            }
            if (inputName.value.trim().length === 0) {
                const notification = document.createElement("p")
                notification.classList.add("error")
                notification.textContent = `*Please write your plans's name`
                inputName.style.border = "2px solid red"
                document.querySelector(".edit").appendChild(notification)
                return;
            }
            let errorCount = 0
            plans.forEach(plan => {
                if ((plan.planName === inputName.value.trim()) && (plan.ID != planID)) {
                    const notification = document.createElement("p")
                    notification.classList.add("error")
                    notification.textContent = `*You must write a different plan's name`
                    inputName.style.border = "2px solid red"
                    document.querySelector(".edit").appendChild(notification)
                    errorCount += 1
                    return;
                }
            })
            if (errorCount) {
                return
            }
            const date = new Date()
            const day = String(date.getDate())
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())
            const updatedDate = `${day}/${month}/${year}`
            const adjustInfo = new plansBriefManagement()
            adjustInfo.adjustPlanInfo(planID, inputName.value, inputDesc.value, updatedDate)
            info.classList.remove("view-activated")
            window.location.href = "../plans-management/plans-management.html"
        })
        document.querySelector(".reset").addEventListener("click", () => {
            plans.forEach(plan => {
                if (plan.ID === planID) {
                    inputName.value = plan.planName
                    inputDesc.value = plan.description
                    return
                }
            })

        })

    })
    document.querySelector(".delete-plan").addEventListener("click", () => {
        info.classList.add("view-activated")
        document.querySelector(".info").style.display = 'none'
        document.querySelector(".edit").style.display = 'none'
        document.querySelector(".delete").style.display = 'block'
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        const currentUserPlans = JSON.parse(rawCurrentPlans)
        currentUSerPlans.forEach(plan => {
            if (plan.ID === planID) {
                document.querySelector(".plan-Name").textContent = `->Plan's name: ${plan.planName}`
            }
        })
        document.querySelector(".no").addEventListener("click", () => {
            info.classList.remove("view-activated")
        })
        document.querySelector(".yes").addEventListener("click", () => {
            const deletePlan = new plansBriefManagement()
            deletePlan.removePlan(planID)
            info.classList.remove("view-activated")
            window.location.href = "../plans-management/plans-management.html"
        })
    })
    document.querySelector(".open-plan").addEventListener("click", () => {
        const setCurrentPlan = new plansBriefManagement()
        setCurrentPlan.setCurrentPlan(planID)
        window.location.href = "../plans-management/plans-management.html"
    })
    window.addEventListener("click", () => {
        menu.classList.remove("activated")
    })
    document.querySelector(".close").addEventListener("click", () => {
        info.classList.remove("view-activated")
    })
}
