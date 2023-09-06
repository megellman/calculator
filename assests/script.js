let calculator = document.querySelector('#calculator-keys');
let content = document.querySelector("#content");
let formula = [];
calculator.addEventListener('click', (e) => {
    let currentKey = e.target.textContent;
    if (currentKey === "c") {
        formula = [];
        content.textContent = " ";
        return
    } else if (currentKey === "=") {
        let answer = calculate(formula);
        content.textContent = answer;
        formula = [answer];
        console.log(formula)
        return
    }
    if (formula.length >= 1) {
        if (currentKey === "+" || currentKey === "-" || currentKey === "*" || currentKey === "/") {
            formula.push(currentKey);
            content.textContent = contentPrnt(formula);
            console.log(formula)
            return
        } else if (formula[formula.length - 1] === "+" || formula[formula.length - 1] === "-" || formula[formula.length - 1] === "*" || formula[formula.length - 1] === "/") {
            formula.push(parseInt(currentKey));
            content.textContent = contentPrnt(formula);
            console.log(formula)
            return
        } else {
            let prevNum = formula.pop();
            let newNum = parseInt(prevNum + currentKey);
            formula.push(newNum);
            content.textContent = contentPrnt(formula);
            console.log(formula)
            return
        }
    } else {
        formula.push(parseInt(currentKey));
        console.log(formula)
        content.textContent = contentPrnt(formula);    
    }
})

function contentPrnt(arr) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += " " + arr[i]
    }
    return str
}

function calculate(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        let num = arr[i + 1];
        let operator = arr[i];
        console.log(`sum: ${sum}, operator: ${operator}, num: ${num}`);
        if (operator === '+') {
            sum += num;
        } else if (operator === '-') {
            sum -= num;
        } else if (operator === '*') {
            sum = sum * num;
        } else if (operator === '/') {
            sum = sum / num;
        }
    }
    
    return sum
}