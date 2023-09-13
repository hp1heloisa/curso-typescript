function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number | string, num2: number | string): void | number {
    num1 = parseFloat(num1 as string);
    num2 = parseFloat(num2 as string);
    if (isNaN(num1) || isNaN(num2)){
        console.log('Não foi possível calcular o resultado.')
    } else{
        return num1 + num2;
    }
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    if (num1 !== null && num2 !== null){
        let result = sum(num1,num2);
        if (typeof result === 'number' ){
            result += multiply(1,2);
            showResult(result);
        } else {
            console.log('Não foi possível calcular o resultado.')
        }
    } else{ 
        console.log('Não foi possível calcular o resultado.')
    }
    
    
});
