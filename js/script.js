const btnRules = document.querySelector(".rules")
const closeRules = document.querySelector(".container__rules img")
btnRules.addEventListener("click", rules)
closeRules.addEventListener("click", rules)

function rules(){
    const containerRules = document.querySelector(".container__rules")
    const blur = document.querySelector(".blur")
    containerRules.classList.toggle("active")
    console.log(containerRules.classList.contains("active"))
    containerRules.classList.contains("active")?blur.classList.add("active"):blur.classList.remove("active")
}