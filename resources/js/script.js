// Current Date
const day = document.querySelector("#day");
const currentDay = () => {
    let today = new Date();
    let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let day = today.getDay();
    let currentDayName = dayList[day];
    return currentDayName;
}

let currentDayText= document.createTextNode(currentDay());
day.appendChild(currentDayText);


// Generating random quotes
const newQuoteBtn = document.querySelector("#newQuote");

const endpoint = "https://api.quotable.io/random";
async function getQuote() {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
    }
        const json = await response.json();
        let quote = json.content;
        displayQuote(quote);
    } catch (err) {
        console.log(err);
        displayQuote("No matter what keep pushing.");
    }
}

const displayQuote = (quote) => {
    const quoteText = document.querySelector("#quote");
    quoteText.textContent = quote;
}
newQuoteBtn.addEventListener("click", getQuote);


// Planning
const planningBtn = document.querySelector(".planningbtn");
const newTask = document.querySelector("#task");
const addBtn = document.querySelector(".addItem");
const planningBackBtn = document.querySelector(".planningBack");
const quote = document.querySelector(".quotes");
const navigation = document.querySelector(".navigation");
const planning = document.querySelector(".planning");

const showPlanning = () => {
    quote.style.display = "none";
    
    navigation.style.display = "none";

    planning.style.display = "block";
}

planningBtn.addEventListener("click", showPlanning);

const goPlanningToHome = () => {
    quote.style.display = "block";
    
    navigation.style.display = "block";

    planning.style.display = "none";
}

planningBackBtn.addEventListener("click", goPlanningToHome);

const displayTask = () => {
    const ul = document.querySelector(".tasks");

    const li = document.createElement("li");
    li.classList.add("task");

    const taskText = document.createTextNode(newTask.value);
    li.appendChild(taskText);

    const span = document.createElement("span");
    span.classList.add("delete");
    span.title = "Delete";

    const closeX = document.createTextNode("\u00D7");
    span.appendChild(closeX);

    li.appendChild(span);
    ul.appendChild(li);
}

const clearForm = () => {
    newTask.value = "";
}

const deleteTask = (e) => {
    const item = e.target;
    if (item.classList[0] === "delete") {
        item.parentElement.remove();
    }
}

let allTasks = document.querySelector(".tasks");
allTasks.addEventListener("click", deleteTask);

addBtn.addEventListener("click", () => {
    let inputValue = newTask.value;
    if (inputValue === "") {
        alert("Please enter a task!");
    } else {
        displayTask();
        clearForm();
    }
});

newTask.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        displayTask();
        clearForm();
    }
});


// Focus
const focusBtn = document.querySelector(".focusbtn");
const focusDiv = document.querySelector(".focus");
const musicCards = document.querySelectorAll(".music-card");
const focusBackBtn = document.querySelector(".focusBack");

const showFocus = () => {
    quote.style.display = "none";
    
    navigation.style.display = "none";

    focusDiv.style.display = "block";
}

focusBtn.addEventListener("click", showFocus);

const goFocusToHome = () => {
    quote.style.display = "block";
    
    navigation.style.display = "block";

    focusDiv.style.display = "none";
}

focusBackBtn.addEventListener("click", goFocusToHome);

const playPause = () => {
    
}

for (let musicCard of musicCards) {
    musicCard.addEventListener("click", playPause);
}

