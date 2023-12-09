

let addIcon = document.querySelector(".add");
let decription = document.querySelector(".description-details");
let cancelIcon = document.querySelector(".remove");
let border = document.querySelector(".description-div");


cancelIcon.addEventListener("click", () => {
    // alert("hello world").

    decription.classList.toggle("toggle");
    border.style.border = "unset";

    addIcon.style.display = "block";
    cancelIcon.style.display = "none";

})

addIcon.addEventListener('click', () => {
    decription.classList.toggle("toggle");
    cancelIcon.style.display = "block";
    addIcon.style.display="none"
})

