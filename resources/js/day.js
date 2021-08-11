const currentDay = () => {
    let today = new Date();
    let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let day = today.getDay();
    let currentDay = dayList[day];
    document.write(currentDay+".");
}