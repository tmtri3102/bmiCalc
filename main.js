let weight = parseFloat(prompt("Nhap can nang"));
let height = parseFloat(prompt("Nhap chieu cao"));
bmi = weight / (height ^ 2);
if (bmi < 18.5) {
	alert("Underweight");
} else if (bmi < 25.0) {
	alert("Normal");
} else if (bmi < 30.0) {
	alert("Overweight");
} else {
	alert("Obese");
}
