let bmi = parseFloat(prompt("Nhập chỉ số BMI"));
if (bmi < 18.5) {
	alert("Underweight");
} else if (bmi < 25.0) {
	alert("Normal");
} else if (bmi < 30.0) {
	alert("Overweight");
} else {
	alert("Obese");
}
