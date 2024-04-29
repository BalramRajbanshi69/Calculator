let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;


let buttonOne = document.querySelector(".btn1");
  buttonOne.onclick = ()=>{
    currentDisplay = currentDisplay + '1';
    document.querySelector("#display").value = currentDisplay;
  }

let buttonTwo = document.querySelector(".btn2");
  buttonTwo.onclick = ()=>{
    currentDisplay = currentDisplay + '2';
    document.querySelector("#display").value = currentDisplay;
  }

let buttonPlus = document.querySelector(".btn-plus");
  buttonPlus.onclick = ()=>{
    currentDisplay = currentDisplay + '+';
    document.querySelector("#display").value = currentDisplay;
  }

  let buttonThree = document.querySelector(".btn3");
  buttonThree.onclick = ()=>{
    currentDisplay = currentDisplay + '3';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonFour = document.querySelector(".btn4");
  buttonFour.onclick = ()=>{
    currentDisplay = currentDisplay + '4';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonMinus = document.querySelector(".btn-minus");
  buttonMinus.onclick = ()=>{
    currentDisplay = currentDisplay + '-';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonFive = document.querySelector(".btn5");
  buttonFive.onclick = ()=>{
    currentDisplay = currentDisplay + '5';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonSix = document.querySelector(".btn6");
  buttonSix.onclick = ()=>{
    currentDisplay = currentDisplay + '6';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonMul = document.querySelector(".btn-mul");
  buttonMul.onclick = ()=>{
    currentDisplay = currentDisplay + '^';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonSeven = document.querySelector(".btn7");
  buttonSeven.onclick = ()=>{
    currentDisplay = currentDisplay + '7';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonEight = document.querySelector(".btn8");
  buttonEight.onclick = ()=>{
    currentDisplay = currentDisplay + '8';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonDiv = document.querySelector(".btn-div");
  buttonDiv.onclick = ()=>{
    currentDisplay = currentDisplay + '/';
    document.querySelector("#display").value = currentDisplay;
  }


  let buttonNine = document.querySelector(".btn9");
  buttonNine.onclick = ()=>{
    currentDisplay = currentDisplay + '9';
    document.querySelector("#display").value = currentDisplay;
  }

  let buttonZero = document.querySelector(".btn0");
  buttonZero.onclick = ()=>{
    currentDisplay = currentDisplay + '0';
    document.querySelector("#display").value = currentDisplay;
  }

  let buttonDot = document.querySelector(".btn-dot");
  buttonDot.onclick = ()=>{
    currentDisplay = currentDisplay + '.';
    document.querySelector("#display").value = currentDisplay;
  }

  let buttonClear = document.querySelector(".btnC");
  buttonClear.onclick = ()=>{
    currentDisplay = '';
    document.querySelector("#display").value = currentDisplay;
  }

  let buttonEqual = document.querySelector(".btn-equal");
  buttonEqual.onclick = ()=>{
    currentDisplay = eval(currentDisplay);
    document.querySelector("#display").value = currentDisplay;
  }