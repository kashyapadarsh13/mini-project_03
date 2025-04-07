const textArea = document.getElementById("textarea")
const totalChar = document.getElementById("total-char")
const remainChar = document.getElementById("remaining-char")
const bdc=document.getElementsByClassName("container")


textArea.addEventListener("keyup", () => {
    updateCounter()
    changeColor()
})

updateCounter()
changeColor()
function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainChar.innerText =  textArea.getAttribute("maxLength") - textArea.value.length
}
function changeColor(){
    if(textArea.value.length == 100){
    let color =["red","blue","green","purple","orange"]
    let randomColor = Math.floor(Math.random()*color.length)
    bdc[0].style.backgroundColor = color[randomColor]
    bdc[0].style.transition = "3s"
    }
    else{
        bdc[0].style.backgroundColor = "white"
        bdc[0].style.color = "black"
    }
}
