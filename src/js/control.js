const smallBtn = document.querySelector(".js-small")
const middleBtn = document.querySelector(".js-middle")
const largeBtn = document.querySelector(".js-large")
const labelSize = document.querySelectorAll(".form-label")
const inputSize = document.querySelectorAll(".custom-col")

smallBtn.addEventListener("click", (e) => {
    fontSize(12)
    formSize("col-lg-4")
    myFunction(e)
})
middleBtn.addEventListener("click", (e) => {
    fontSize(15)
    formSize("col-lg-6")
    myFunction(e)
})
largeBtn.addEventListener("click", (e) => {
    fontSize(20)
    formSize("col-lg-12")
    myFunction(e)
})

function fontSize(x) {
    labelSize.forEach((item) => {
        item.style.fontSize = x +"px" 
    })
}
function formSize(y) {
    inputSize.forEach((item) => {
        item.classList=`col-12 custom-col ${y}`
    })
}
function myFunction(e) {
    const elems = document.querySelector(".active");
    if(elems !==null){
        elems.classList.remove("active");
    }
    e.target.classList.add("active");
}