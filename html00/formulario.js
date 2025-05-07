// console.log("inicio")

// let use = document.getElementById("user")
// let password = document.getElementById("password")

// console.log(user)
// console.log(password)

console.log("Inicio")

function muestra() {
    let user = document.getElementById("user")
    let password = document.getElementById("password")

    console.log(user.value)
    console.log(password.value)
}

// ejemplo de funicion de callback
const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra())

// ejemplo de funicion anonima de tipo arrow
boton.addEventListener("click",
    () => {
        let user = document.getElementById("user")
        let password = document.getElementById("password")

        console.log(user.value)
        console.log(password.value)
    }
)