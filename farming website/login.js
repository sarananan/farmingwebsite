let text=document.getElementById("text")
let submit=document.getElementById("submit")
let pass=document.getElementById("password")
let gmail=document.getElementById("gmail")
let number1=document.getElementById("number")
let form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    Validate()
    // alert(gmail.value)
    num()
})
function Validate(){
    let textval=text.value
    let pasval=pass.value
    // alert(pasval)
    if(textval==""){
        error("Enter the value")
        indicatefalse(text)
    }
    else if(textval.length<8){
        error("Enter atleast 8 charactor")
        indicatefalse(text)
    }
    else{
        succes()
        indicatetrue(text)
    }

    if(pasval<8){
        indicatefalse(pass)
    }
    if(pasval==""){
        indicatefalse(pass)
    }
    else{
        indicatetrue(pass)
    }
}



function error(val){
   alert(val)
}
function succes(){
    alert("succes")
}
function mail(){
    gmailval=gmail.value
    // let chceking=/^[a-zA-Z]+/.[0-9a-zA-Z]+/.[a-zA-Z]$/
    alert(gmailval)
}
function num(){
   let num1= number1.value
   let numcheck=/^[0-9]{10}$/
   let num2=num1.match(numcheck)
    if(num2){
        alert(num2)
        indicatetrue(number1)
    }
    else{
        alert(num2)
        indicatefalse(number1)
    }
}
function indicatetrue(element)
{
    element.classList.remove("redcolor")
    element.classList.add("green")
}
function indicatefalse(element)
{
    element.classList.remove("green")
    element.classList.add("redcolor")
}