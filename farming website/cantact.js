let form=document.querySelector("form")
let txt=document.querySelector("#n")
let email=document.querySelector("#e")
let pass=document.querySelector("#p")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    handleError()
    // alert(!1)
})
function handleError(){
    textvalue=txt.value.trim()
    passvalue=pass.value.trim()
    if(textvalue==''){
       error(txt,'Enter value')
       return false
    }
    else if(textvalue.length<8){
        // succes(txt)
        error(txt,"Enter atleast 8 digit")
        return false
    }
    else{
        succes(txt)
    }

    if(passvalue.length<8){
        error(pass,"Enter atleast 8 digit")
    }else if(passvalue==""){
        error(pass,"Enter password")
    }else{
        succes(pass)
    }
    
}
function error(element,message){
    let pclass=element.parentElement;
    let div1=pclass.querySelector('.err')
    div1.innerHTML=message;
    element.classList.add('remove')
}
function succes(element){
    let pclass=element.parentElement;
       let div1=pclass.querySelector('.err')
       div1.innerHTML='';
       element.classList.add('succes')
}