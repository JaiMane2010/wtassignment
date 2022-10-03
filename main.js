let turn = "x"
const boxEl = document.querySelectorAll(".box")
const turnEl = document.querySelector("#turnn")
const resetEl = document.querySelector('#reset')
const change=()=>{
   return turn === "x"?"o": "x"
}

const wincheck = ()=>{
  let win = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
  ]
 
  win.forEach( e=>{
   
  
   if((boxEl[e[0]].innerText === boxEl[e[1]].innerText) && (boxEl[e[2]].innerText === boxEl[e[1]].innerText) &&(boxEl[e[0]].innerText !== "") ){
turnEl.innerHTML = `${boxEl[e[0]].innerText} won`

 }
  })
}

Array.from(boxEl).forEach( Element=>{
  
   Element.addEventListener("click", ()=>{
Element.innerHTML = turn
turn = change()
turnEl.innerHTML = "turn:" + turn
wincheck()
   })
})

// console.log(boxEl)

resetEl.addEventListener("click", ()=>{
 Array.from(boxEl).forEach((e)=>{
   e.innerText = ""
   turnEl.innerHTML = "turn:" + turn
 })
})











































// let submit=()=>{
//    for(i= 0; i<inputEl.length; i ++){
//       console.log(inputEl[i])
   
//       if(inputEl[0].value == "x" && inputEl[1].value == 'x' && inputEl[2].value == 'x' || inputEl[3]=='x' && inputEl[4].value == 'x'&& inputEl[5].value == 'x' || 
//       inputEl[6].value == 'x' && inputEl[7].value =='x' && inputEl[8].value == 'x' || inputEl[0]=='x' && inputEl[4].value == 'x'&& inputEl[8].value == 'x' ||
//        inputEl[2]=='x' && inputEl[4].value == 'x'&& inputEl[6].value == 'x' || inputEl[0]=='x' && inputEl[3].value == 'x'&& inputEl[6].value == 'x' ||
//         inputEl[1]=='x' && inputEl[4].value == 'x'&& inputEl[7].value == 'x' || inputEl[2]=='x' && inputEl[4].value == 'x'&& inputEl[8].value == 'x'){
//          alert("Player X won");
//          inputEl[i].value = ""
//         } else(inputEl[0].value == "y" && inputEl[1].value == 'y' && inputEl[2].value == 'y' || inputEl[3]=='y' && inputEl[4].value == 'y'&& inputEl[5].value == 'y' || 
//         inputEl[6].value == 'y' && inputEl[7].value =='y' && inputEl[8].value == 'y' || inputEl[0]=='y' && inputEl[4].value == 'y'&& inputEl[8].value == 'y' ||
//          inputEl[2]=='y' && inputEl[4].value == 'y'&& inputEl[6].value == 'y' || inputEl[0]=='y' && inputEl[3].value == 'y'&& inputEl[6].value == 'y' ||
//           inputEl[1]=='y' && inputEl[4].value == 'y'&& inputEl[7].value == 'y' || inputEl[2]=='y' && inputEl[4].value == 'y'&& inputEl[8].value == 'y'); {
//            alert("Player X won");
//            inputEl[i].value = ""
//           }
      
      
//    }
// }