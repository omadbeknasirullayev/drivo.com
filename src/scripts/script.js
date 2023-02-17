"use strict"

let thema = document.querySelector(".theme"),
    body = document.querySelector(".body"),
    aboutus = document.querySelector("#aboutus"),
    compact = document.querySelector(".compact"),
    sport = document.querySelector(".sport"),
    vans = document.querySelector(".vans"),
    dream__card = document.querySelector(".dream__card")


console.log(aboutus.classList)


function changeTheme () {
    const theme = localStorage.getItem("theme")

    if (theme == "true") {
        // document.body.style.cssText="background-color: black;"
        document.documentElement.classList.add("mode")
    } else {
        document.documentElement.classList.remove("mode")
    }
    let k = document.querySelector("#aboutus")
    console.log(k.classList)
}
changeTheme()

thema.addEventListener('click', (e) => {
    let theme = localStorage.getItem("theme")
    if (theme != "false") {
        theme = false
    } else {
        theme = true
    }
    console.log(theme)

    localStorage.setItem("theme", theme)
    changeTheme()
})

compact.addEventListener('click', (e) => {
    compact.classList.add("active")
    dream__card.innerHTML = ""
    renderCars(compactCars)
})

sport.addEventListener('click', (e) => {
    dream__card.innerHTML = ""
    renderCars(sportCars)
})


vans.addEventListener('click', (e) => {
    dream__card.innerHTML = ""
    renderCars(vansCars)
})