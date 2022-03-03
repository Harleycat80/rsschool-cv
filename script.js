
const header=document.querySelector('ul')
const main = document.querySelector('main')

let area=''


function changeBack(e){   
    if(area==""){
    area = e.target.textContent
    let fild =document.getElementById(area)
     fild.classList.add('active')
   
    }
    else{
    fild = document.getElementById(area) 
    fild.classList.remove('active')
    area = e.target.textContent
    fild =document.getElementById(area)
    fild.classList.add('active')
    
   }
   
}

function changeStatus(){
    let activ = document.getElementsByClassName('active')
    activ.classList.remove('active')

}

header.addEventListener('click',changeBack)
main.addEventListener('click',changeStatus)
