
function hack() {
  return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
}

function udkumodal() {
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
    let cur = u[mode()]
    let pre = cc[u.name]
    
    if(Math.abs(cur) > pre*3 && pre!=0) {
      kicks.push(u.name)
    } 
    
    if (pre == 0 && Math.abs(cur) > 50) {
      kicks.push(u.name)
    }
    
    cc[u.name] = u[mode()]
  }
  
}

function mode() {
  return Object.keys(hack().stateNode.state.players[0]).filter(a=>{if("number"==typeof hack().stateNode.state.players[0][a])return!0})[0]
}

setInterval(check,300)
