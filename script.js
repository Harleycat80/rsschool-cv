
const header=document.querySelector('ul')
const cont=document.querySelector('main')


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



header.addEventListener('click',changeBack)

cont.addEventListener('click', remClass)
function remClass(){
    for (let elem of cont.getElementsByTagName('*')){
          elem.classList.remove('active')
    }
    console.log('done')
}

