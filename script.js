let calories=0;
let protein=0;
let fat=0;
let carbs=0;
let water=0;

function save(){
localStorage.setItem("kalorix",JSON.stringify({
calories,protein,fat,carbs,water
}));
}

function load(){
const data=JSON.parse(localStorage.getItem("kalorix"));

if(!data)return;

calories=data.calories;
protein=data.protein;
fat=data.fat;
carbs=data.carbs;
water=data.water;

update();
}

function addFood(){

calories += Number(document.getElementById("calories").value);
protein += Number(document.getElementById("protein").value);
fat += Number(document.getElementById("fat").value);
carbs += Number(document.getElementById("carbs").value);

update();
save();

if(calories > 2000){
document.getElementById("achievement").innerText =
"🏆 2000 kcal dosaženo!";
}
}

function update(){

document.getElementById("totalCalories").innerText=calories;
document.getElementById("totalProtein").innerText=protein;
document.getElementById("totalFat").innerText=fat;
document.getElementById("totalCarbs").innerText=carbs;

let percent=(calories/2500)*100;

if(percent>100)percent=100;

document.getElementById("progressBar").style.width=
percent+"%";
}

function addWater(){
water += 250;
document.getElementById("water").innerText=
water+" ml";
save();
}

function calculateBMI(){

let weight=
Number(document.getElementById("weight").value);

let height=
Number(document.getElementById("height").value)/100;

let bmi=
(weight/(height*height)).toFixed(1);

document.getElementById("bmiResult").innerText=
"Tvoje BMI je "+bmi;
}

const ctx=document.getElementById("chart");

new Chart(ctx,{
type:"doughnut",
data:{
labels:["Bílkoviny","Tuky","Sacharidy"],
datasets:[{
data:[protein,fat,carbs]
}]
}
});

load();
