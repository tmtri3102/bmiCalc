let weight = parseFloat(prompt("Nhập cân nặng theo kg, ví dụ 65"));
let height = parseFloat(prompt("Nhập chiều cao theo m, ví dụ 1.75"));
bmi = weight / (height * height);
if (bmi < 18.5) {
	alert("Underweight");
} else if (bmi < 25.0) {
	alert("Normal");
} else if (bmi < 30.0) {
	alert("Overweight");
} else {
	alert("Obese");
}
