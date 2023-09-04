let operator= '';
let previousValue= '';
let currentValue= '';


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        if (currentValue.length <= 5){
            currentValue += e.target.textContent;
        }
            currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(o){
        operator = o.target.textContent;
        previousValue = currentValue;
        currentValue = '';
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    clear.addEventListener ("click", function(){
        previousScreen.textContent = '';
        currentScreen.textContent = '';
        operator= '';
        previousValue= '';
        currentValue= '';
    })
    equal.addEventListener("click", function(){
        calculate ();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    });
    decimal.addEventListener("click", function(){
        addDecimal ();
    })
})

function calculate (){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    }else if (operator === "-"){
        previousValue -= currentValue;
    }else if (operator === "x"){
        previousValue *= currentValue;
    }else {
        previousValue /= currentValue;
    }

    previousValue = Math.round(previousValue*1000) / 1000 ;
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}

function addDecimal (){
    if (!currentValue.includes(".")){
        currentValue += ".";
    }
}

