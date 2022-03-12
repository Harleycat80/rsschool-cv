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
}

//IsIsogram Codewars
/*function isIsogram(str){
    let set = new Set(...str.toLowerCase().split(" "))
    console.log(set)
    let set2=new Set(str)
    console.log(set2)

   return (str.length==set.size)?true:false 
    
  
    
  }

 const str ="Dermatoglyphics"

 isIsogram(str)*/
// Умножить на цифру
/*function explode(s) {

    return s.split('').reduce(function(total, amount){
        total+=amount.repeat(Number(amount))
        return total
        
    },"")
    
    
  }

  const s = "312"
  explode(s)*/

/*function revrot(str, sz) {
  let arr = [];
  if(str.length<sz||str.length == 0||sz == 0){
    return "";
}
  for (let i = 0; i < str.length; i += sz) {
    let arr1 = str.split("").slice(i, i + sz);
    if (arr1.length < sz) {
      break;
    } else {
      let chank = arr1.reduce(function (total, el) {
        total += el ** 3;
        return Number(total);
      }, 0);

      if (chank % 2 == 0) {
        arr.push(arr1.reverse().join(""));
      } else {
        firstDigit = arr1.shift();
        arr1.push(firstDigit);
        arr.push(arr1.join(""));
      }
    }
  }
  console.log(arr.join(""));
}
let str = "733049910872815764";
let sz = 5;

330479108928157;

revrot(str, sz);*/
/*function solution(number){
    let sum=0
  for(let i=1;i<number;i++){
      (i%3==0||i%5==0)?sum+=i:sum=sum;
      
      
  }
  return sum
}

let number=10

solution(number)*/

/*function getParticipants(handshakes){

    let sum=1;
    if (handshakes==0){
        return 1
    }
    for(let i=1;i<=handshakes;i++){
        sum+=i
        if (sum<handshakes){
            continue
        }
        return i
        
        
    }
    
  }


let handshakes=1

getParticipants(handshakes)*/

/*function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
   return callbacks;
  }

  let n =6
  createFunctions(n)*/
/*function createSecretHolder(secret) {
    let obj={
      value: secret,
    getSecret: function(){
      return obj.value
      
    },
    setSecret: function(n){
    obj.value=n
    
    
  }
  
   } 
   return obj
  }

   let secret =5
   
   let obj=createSecretHolder(secret)
   obj.getSecret()
   obj.setSecret(2)
   obj.getSecret()


   console.log((100 + 23).toString() )*/

/*function deepCount(a) {
  let count=a.length
  for(let i=0; i<a.length;i++){
  if (Array.isArray(a[i])){
    count+=deepCount(a[i])
  return count 
  }
 
}
}*/

