document.addEventListener("DOMContentLoaded", ()=>{
    const form=document.getElementById("bmiForm");
    const result=document.getElementById("result");
form.addEventListener("submit", (e)=>{
e.preventDefault();
const age=parseInt(document.getElementById("age").value)
const height=parseFloat(document.getElementById("height").value)
const weight=parseFloat(document.getElementById("weight").value)
if(!age || !height || !weight)return;
const heightM=height/100;
const bmi=weight/(heightM*heightM);
const BMI=bmi.toFixed(1);
let status="";
if(age>18){
    if(BMI<18.5){
        status="Underweight";}
    else if(BMI>=18.5 && BMI<24.9){
        status="Normal weight";}
    else if(BMI>=25 && BMI<29.9){
        status="Overweight";}
    else{
        status="Obesity";}
}
else{
    if(BMI<16.5){
        status="Underweight";}
    else if(BMI>=16.5 && BMI<23){
        status="Normal weight";}
    else if(BMI>=23 && BMI<28){
        status="Overweight";}
    else{
        status="Obesity";}
}
result.textContent=`Your BMI is ${BMI} (${status})`;
});
});
