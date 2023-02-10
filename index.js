// fetch("https://evilinsult.com/generate_insult.php", { mode: 'cors' })
//     .then(res => res.json())
//     .then(data => console.log(data))

const adviceBtn = document.getElementById("adviceBtn")
const techyBtn = document.getElementById("techyBtn")
const commitBtn = document.getElementById("commitBtn")
const adviceText = document.getElementById("adviceText")
const techyText = document.getElementById("techyText")
const commitText = document.getElementById("commitText")

document.addEventListener("click", function (e) {
    if (e.target.id === "adviceBtn") {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => {
                console.log(data.slip.advice)
                adviceText.textContent = data.slip.advice
            })
    }
    //Imp: res.text()
    else if (e.target.id === "techyBtn") {
        fetch("https://techy-api.vercel.app/api/text")
            .then(res => res.text())
            .then(data => {
                console.log(data)
                techyText.textContent = data
            })
    }
    else if (e.target.id === "commitBtn") {
        fetch("https://whatthecommit.com/index.txt")
            .then(res => res.text())
            .then(data => {
                console.log(data)
                commitText.textContent = data
            })
    }
})
