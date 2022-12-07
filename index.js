let amountElement = document.querySelector(".amount");
let formElement = document.querySelector(".form");
let fromCurrencySelect = document.querySelector("#fromCurrency");
let toCurrencySelect = document.querySelector("#toCurrency");
let resultElement = document.querySelector(".result");

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    let rate = 1;
    let usdToPln = 4.44;
    let usdToEur = 0.95;
    let eurToPln = 4.67;
    let eurToUsd = 1.05;
    let plnToUsd = 0.23;
    let plnToEur = 0.21;
    
    if (fromCurrencySelect.value === 'usd' && toCurrencySelect.value === 'eur') {
        rate = usdToEur;
    } else if (fromCurrencySelect.value === 'usd' && toCurrencySelect.value === 'pln') {
        rate = usdToPln;
    } else if (fromCurrencySelect.value === 'eur' && toCurrencySelect.value === 'usd') {
        rate = eurToUsd;
    } else if (fromCurrencySelect.value === 'eur' && toCurrencySelect.value === 'pln') {
        rate = eurToPln;
    } else if (fromCurrencySelect.value === 'pln' && toCurrencySelect.value === 'usd') {
        rate = plnToUsd;
    } else if (fromCurrencySelect.value === 'pln' && toCurrencySelect.value === 'eur') {
        rate = plnToEur;
    }

    if (amountElement.value >= 0) {
        resultElement.innerText = (amountElement.value * rate).toFixed(2);
    }
})