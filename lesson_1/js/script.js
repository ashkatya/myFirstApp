function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

document.write("Я владею:"+ '<br>') 
	function showSkills() {
		let skills = ["HTML","CSS","JS"];

		for (let i = 0; i < skills.length; i++) {
			document.write(skills[i] + '<br>');
			  //Я владею html <br>
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("У вас большие шансы стать фронтендером")
		} else {
			alert("Рановато еще!")
		} 
	}
	checkAge();

	function calcPow(num) {
		console.log(num * num)
	}
	calcPow(4);
	calcPow(6);

}

myFirstApp("Katya", 25)