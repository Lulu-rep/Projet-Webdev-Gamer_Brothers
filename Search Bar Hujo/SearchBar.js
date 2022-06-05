const usercardTemplate = document.querySelector("[data-user-template]")
const usercardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-user-search]")

let users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.details.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = usercardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.details
            usercardContainer.append(card)
            return { name: user.name, details: user.details, element: card }
        })
    })