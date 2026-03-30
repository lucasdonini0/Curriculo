const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")

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

    })
})