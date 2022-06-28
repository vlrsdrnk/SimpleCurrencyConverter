const input = require("sync-input");

const value = { USD: 1, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75 };

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let user = input();
    if (user == 1) {
        converter();
    } else if (user == 2) {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");
        user = 1;
    }
}

function converter() {
    let amount = 0;
    let res = 0;
    let toCurrency = 0;

    console.log("What do you want to convert?");

    let fromCurrency = input("From: ").toUpperCase();

    if (fromCurrency in value) {
        toCurrency = input("To: ").toUpperCase();
    } else {
        console.log("Unknown currency");
    }

    if (toCurrency in value) {
        amount = input("Amount: ");
        if (/[a-zA-Z]/.test(amount)) {
            console.log("The amount has to be a number");
        }
        if (amount < 0) {
            console.log("The amount can not be less than 1");
        }

        switch (toCurrency) {
            case "USD":
                res = toUSD(fromCurrency, amount) * value.USD;
                break;
            case "JPY":
                res = toUSD(fromCurrency, amount) * value.JPY;
                break;
            case "EUR":
                res = toUSD(fromCurrency, amount) * value.EUR;
                break;
            case "RUB":
                res = toUSD(fromCurrency, amount) * value.RUB;
                break;
            case "GBP":
                res = toUSD(fromCurrency, amount) * value.GBP;
                break;
        }
        console.log("Result: " + amount + " " + fromCurrency + " equals " + res.toFixed(4) + " " + toCurrency);
    } else {
        console.log("Unknown currency");
    }
}

function toUSD(fromCurrency, amount) {
    let usdValue = 0;
    switch (fromCurrency) {
        case "USD":
            usdValue = amount / 1;
            break;
        case "JPY":
            usdValue = amount / 113.5;
            break;
        case "EUR":
            usdValue = amount / 0.89;
            break;
        case "RUB":
            usdValue = amount / 74.36;
            break;
        case "GBP":
            usdValue = amount / 0.75;
            break;
        default:
            break;
    }
    return usdValue;
}