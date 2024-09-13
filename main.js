function submit() {
	let weight = +document.getElementById("weight").value;
	let height = +document.getElementById("height").value;
	let result = document.getElementById("result");
	console.log(weight);
	console.log(height);
	bmi = weight / (height * height);
	if (bmi < 18.5) {
		result.innerText = "Underweight";
	} else if (bmi < 25.0) {
		result.innerText = "Normal";
	} else if (bmi < 30.0) {
		result.innerText = "Overweight";
	} else {
		result.innerText = "Obese";
	}
}
