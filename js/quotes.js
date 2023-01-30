const quotes = [
    "Passion is the genesis of genius.",
    "Yesterday, you said tomorrow.",
    "Only I can change my life.",
    "Always do your best.",
    "Success follows doing.",
    "Our greatest weakness lies in giving up.",
    "Never, never, never give up.",
    "He can do, she can do, why not me?",
    "There is no royal road to Rome.",
    "Too early to stop.",];
const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote span:first-child");
quote.innerText = chosenQuote;