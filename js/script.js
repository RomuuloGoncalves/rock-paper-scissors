const btnRules = document.querySelector(".rules")
const closeRules = document.querySelector(".container__rules img")
let spanScore = document.getElementById("score")
btnRules.addEventListener("click", rules)
closeRules.addEventListener("click", rules)

let storage = {
    toStorage: (value)=>localStorage.setItem("score",value) || "0",
    fromStorage: ()=> localStorage.getItem("score") || "0"
}

spanScore.innerHTML = storage.fromStorage("score")
function rules(){
    const containerRules = document.querySelector(".container__rules")
    const blur = document.querySelector(".blur")
    containerRules.classList.toggle("active")
    console.log(containerRules.classList.contains("active"))
    containerRules.classList.contains("active")?blur.classList.add("active"):blur.classList.remove("active")
}

function housePicked(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function toCompare(choose, houseChoose){
    if((choose == 1 && houseChoose == 2)||(choose == 2 && houseChoose == 3)||(choose == 3 && houseChoose == 1)){
        return false
    }

    if(choose == houseChoose){
        return "empate"
    }

    return true
}

function choose(choose){
    const houseChoose = housePicked(1,3)
    console.log(houseChoose)
    let symbol

    if(choose == 1){
        symbol = "paper"
    }else if(choose == 2){
        symbol = "scissors"
    }else{
        symbol = "rock"
    }


    if(houseChoose == 1){
        houseSymbol = "paper"
    }else if(houseChoose == 2){
        houseSymbol = "scissors"
    }else{
        houseSymbol = "rock"
    }

    if(choose == housePicked){

    }else{
        const main = document.querySelector("main")
        main.innerHTML = ""

        if(toCompare(choose, houseChoose) == "empate"){
            main.innerHTML += `
            <div class="container__result">
            <div class="container">
                <p>You picked</p>
                <div class="circles">
                    <div class="circle" id="${symbol}">
                        <img src="./images/icon-${symbol}.svg" alt="">
                    </div>
                </div>
            </div>
        
            <div class="container">
                <p>EMPATE</p>
                <button onclick='reload()' >PLAY AGAIN</button>
            </div>
        
            <div class="container">
                <p>The house picked</p>
                <div class="circles">
                    <div class="circle" id="${houseSymbol}">
                        <img src="./images/icon-${houseSymbol}.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="rules">
            Rules
        </div>
            `
        }else if(toCompare(choose, houseChoose)){
            let score = storage.fromStorage("score")
            storage.toStorage(Number(score)+1)
            main.innerHTML += `
            <div class="container__result">
            <div class="container">
                <p>You picked</p>
                <div class="circles">
                    <div class="circle" id="${symbol}">
                        <img src="./images/icon-${symbol}.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="container">
                <p>YOU WIN</p>
                <button onclick='reload()'>PLAY AGAIN</button>
            </div>

            <div class="container">
                <p>The house picked</p>
                <div class="circles">
                    <div class="circle" id="${houseSymbol}">
                        <img src="./images/icon-${houseSymbol}.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="rules">
            Rules
        </div>
            `
        }else{
            main.innerHTML += `
            <div class="container__result">
            <div class="container">
                <p>You picked</p>
                <div class="circles">
                    <div class="circle" id="${symbol}">
                        <img src="./images/icon-${symbol}.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="container">
                <p>YOU LOSE</p>
                <button onclick='reload()'>PLAY AGAIN</button>
            </div>

            <div class="container">
                <p>The house picked</p>
                <div class="circles">
                    <div class="circle" id="${houseSymbol}">
                        <img src="./images/icon-${houseSymbol}.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="rules">
            Rules
        </div>
            `
        }
        }
    }


function reload(){
    window.location.reload()
}
// papel = 1
// tesoura = 2
// pedra 3