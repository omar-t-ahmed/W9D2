class View {
  constructor(game, el) {
    setupBoard(el)
  }
  
  setupBoard(container) {
    let ele = document.createElement("ul");
    ele.innerText = "";
    container.append(ele);
    let ul = document.querySelector("ul")
    for (let i = 0 ; i < 9; i++) {
      let li = document.createElement("li")
      li.innerText = "";
      ul.append(li)
    }
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;