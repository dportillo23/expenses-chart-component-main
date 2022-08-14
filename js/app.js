import rawData from "./data/data.json" assert {type: "json"};
import myChart from './mychart.js';

// charts color
const primaryColor = "hsl(10, 79%, 65%)";
const secondaryColor = "hsl(186, 34%, 60%)";

// Hover charts color
const hoverPrimary = "hsl(10, 79%, 75%)";
const hoverSecondary = "hsl(186, 34%, 70%)";

const today = new Date().getDay() - 1;

const todayFactored = today < 0 ? 6 : today;
const backgroundColors = Array.apply(null, Array(7)).map((_, i) => i === todayFactored ? secondaryColor : primaryColor)
const hoverColors = Array.apply(null, Array(7)).map((_, i) => i === todayFactored ? hoverSecondary : hoverPrimary)

// data for the charts from JSON file
const labels = rawData.map(day => day.day)
const data = rawData.map(day => day.amount)

const passingData = {
    labels: labels,
    datasets: [{
        data: data,
        backgroundColor: 
        backgroundColors
        ,
        borderColor: backgroundColors,
        borderWidth: 1,
        hoverBackgroundColor: hoverColors,
        hoverBorderColor: hoverColors
    }]
}

const ctx = document.getElementById('myChart').getContext('2d');
myChart(ctx, passingData);