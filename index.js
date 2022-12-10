{
    const calculateRate = () => {
        let fromCurrencySelect = document.querySelector(".js-fromCurrency");
        let toCurrencySelect = document.querySelector(".js-toCurrency");

        let rate = 1;
        let usdToPln = 4.44;
        let usdToEur = 0.95;
        let eurToPln = 4.67;
        let eurToUsd = 1.05;
        let plnToUsd = 0.23;
        let plnToEur = 0.21;

        if (fromCurrencySelect.value === toCurrencySelect.value) {
            return rate;
        } else {
            switch (fromCurrencySelect.value) {
                case "usd": 
                    return toCurrencySelect.value === "eur" ? usdToEur : usdToPln; 
                case "eur":
                    return toCurrencySelect.value === "usd" ? eurToUsd : eurToPln;
                case "pln":
                    return toCurrencySelect.value === "usd" ? plnToUsd : plnToEur;
            }
        }
    }

    const calculateResult = (rate) => {
        let amountElement = document.querySelector(".js-amount");
        let resultElement = document.querySelector(".js-result");

        if (amountElement.value >= 0) {
            resultElement.innerText = (amountElement.value * rate).toFixed(2);
        }
    }

    const init = () => {
        let formElement = document.querySelector(".form");

        formElement.addEventListener("input", () => calculateResult(calculateRate()))
    }

    init();
}