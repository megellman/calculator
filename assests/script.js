let calculator = document.querySelector('#calculator-keys');
let content = document.querySelector("#content");
let formula = [];
calculator.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.tagName === "P") {
        let currentKey = e.target.textContent;
        if (currentKey === "c") {
            formula = [];
            content.textContent = " ";
            return
        } else if (currentKey === "=") {
            content.textContent = calculate(formula);
            return
        }
        if (formula.length >= 1) {
            if (currentKey === "+" || currentKey === "-" || currentKey === "*" || currentKey === "/") {
                console.log('not a num')
                formula.push(currentKey);
                console.log(formula)
                content.textContent = contentPrnt(formula);
                return
            } else if (formula[formula.length - 1] === "+" || formula[formula.length - 1] === "-" || formula[formula.length - 1] === "*" || formula[formula.length - 1] === "/") {
                console.log('last index was a symbol')
                formula.push(currentKey);
                console.log(formula)
                content.textContent = contentPrnt(formula);
                return
            } else {
                console.log('num')
                let prevNum = formula.pop();
                let newNum = prevNum + currentKey;
                console.log(newNum);
                formula.push(newNum);
                content.textContent = contentPrnt(formula);
                console.log(formula)
                return
            }
        }
        formula.push(currentKey);
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
    // 1 + 2
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let num = parseInt(arr[i + 1]);
        console.log('num is ' + num)
        let operator = parseInt(arr[i]);
        console.log('operator is '+ operator);
        if(operator === '+'){
            console.log(sum, operator, num);
            sum += num;
            console.log(sum)
        } else if (operator === '-'){
            console.log(sum, operator, num);
            sum -= num;
        } else if(operator === '*'){
            console.log(sum, operator, num);
            sum = sum * num;
        } else if(operator === '/'){
            console.log(sum, operator, num);
            sum = sum / num;
        }
    }
    console.log(sum)
    return sum
}