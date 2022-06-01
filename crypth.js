// let rgx = /k|m|b|t/g
// let kvals = {
//   k: 1e3,
//   m: 1e6,
//   b: 1e9,
//   t: 1e12
// }

// function rm(n) {
//   return n.toLowerCase().replaceAll(rgx, function (c){return `*`+kvals[c]}).split("*").map(v=>parseFloat(v)).reduce((a,b)=>a*b, 1)
// }

function hack() {
  return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
}

function udkumodal() {
  //update kicked user modal
  if (document.querySelector("#app > div > div > div.arts__modal___VpEAD-camelCase > form > div.styles__holder___3CEfN-camelCase > div > div.styles__button___22rMT-camelCase.styles__hoverRed___243tA-camelCase")) {
    document.querySelector("#app > div > div > div.arts__modal___VpEAD-camelCase > form > div.styles__holder___3CEfN-camelCase > div > div.styles__button___22rMT-camelCase.styles__hoverRed___243tA-camelCase").click()
  }
}
let cc = {}
let kicks = []
function check() {
  let us = document.querySelector("#app > div > div > div.arts__hostRegularBody___Yp72x-camelCase.styles__body___2EH9y-camelCase > div.styles__left___1r0kE-camelCase.styles__invisibleScrollbar___1TG0f-camelCase");
  let pl = hack().stateNode.state.players;
  for (var ku of kicks) {
  //var because it is accessible in the second scope
    for (var u of Array.from(document.querySelector("#app > div > div > div.arts__hostRegularBody___Yp72x-camelCase.styles__body___2EH9y-camelCase").children[0].children)) {
        let name = u.innerText.split("\n")[2]
        if (name == ku) {
          u.click()
        }
    }
  }
  udkumodal()
  for (let u of pl) {
    if (!cc[u.name]) {
      cc[u.name] = u[mode()]
    }
    let cur = u[mode()] //current
    let pre = cc[u.name] //previous
    
    if(Math.abs(cur) > pre*3 && pre!=0) {
      //current is more than three times previous if previous != 0, fails = buddy bot, 40 crypto on first few.
      kicks.push(u.name)
    } 
    
    if (pre == 0 && Math.abs(cur) > 50) {
      kicks.push(u.name)
    }
    
    cc[u.name] = u[mode()] //keep at end
  }
  //this could be pl.map(u=>{}), but that would return an array, or forEach, but I decided to use es6 forof : forin
  
}

function mode() {
  return Object.keys(hack().stateNode.state.players[0]).filter(a=>{if("number"==typeof hack().stateNode.state.players[0][a])return!0})[0]
}

setInterval(check,1000)
