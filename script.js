const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")
const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const sidebar = document.querySelector(".sidebar")

navLinks.forEach(link => {
    link.addEventListener("click", () =>{
        const target = link.dataset.target // nao sei porque, mas funciona :)

        sections.forEach(s =>{
            s.classList.remove("active")
        })
        navLinks.forEach(l => {
            l.classList.remove("active")
        })

        document.getElementById(target).classList.add("active")

        link.classList.add("active") // pra destacar depois

        sidebar.classList.remove("open")
    })
})

menuOpen.addEventListener("click", () =>{
    sidebar.classList.add("open")
})
menuClose.addEventListener("click", () =>{
    sidebar.classList.remove("open")
})