const toggleMenu = document.querySelector("body .container .home header > i");
const menu = document.querySelector("body .container>ul");
const close = document.querySelector("body .container>ul i");
const bookDetails = document.querySelector("body .container .home .book-details")
const closeDetails = document.querySelector("body .container .home .book-details>i")
toggleMenu.addEventListener("click", () => {
    menu.style.display = "block"
})
close.addEventListener("click", () => {
    menu.style.display = "none"
})
closeDetails.addEventListener("click", () => {
    bookDetails.style.display = "none"
})
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-image")) {
        document.querySelector("body .container .home .book-details img").src = e.target.src;
        document.querySelector("body .container .home .book-details h3").textContent = e.target.parentElement.children[1].textContent;
        document.querySelector("body .container .home .book-details p").textContent = e.target.parentElement.children[2].textContent;
        bookDetails.style.display = "flex"
    }
})


