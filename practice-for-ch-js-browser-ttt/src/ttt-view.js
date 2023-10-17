class View {
  constructor(game, el) {
  }
  
  setupBoard() {
    let ele = document.createElement("li");
    ele.innerText = "X";
    this.append(ele);
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;