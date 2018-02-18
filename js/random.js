document.getElementById('button').addEventListener('click', function () {

	let minNum = parseInt(document.getElementById('num1').value);
	let maxNum = parseInt(document.getElementById('num2').value);

	let error = document.getElementById('error');

	if ((Number.isNaN(parseFloat(maxNum))) && (Number.isNaN(parseFloat(minNum)))) {
		maxNum = 0;
		minNum = 0;
		error.textContent = 'Please fill the min or max value to start';
		error.style.display = 'block';
	} else if (Number.isNaN(parseFloat(maxNum))) {
		maxNum = 0;
		error.style.display = 'none';
	} else if (Number.isNaN(parseFloat(minNum))) {
		minNum = 0;
		error.style.display = 'none';
	} else {
		error.style.display = 'none';
	}

	let result = document.getElementById('result').getElementsByTagName('p')[0];

	let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

	result.textContent = randomNum;

	numR(randomNum);

});

function numR(rightNum) {

	let maxNum = parseInt(document.getElementById('num2').value);

	let checkbox = document.getElementById('check');
	let chanceResult = document.getElementById('chanceResult');
	let list = [];

	while (true) {
		let randomNum = Math.floor(Math.random() * (rightNum + 1));

		list.push(randomNum);

		if (randomNum == rightNum) {
			chanceResult.innerHTML = 'Rolled: ' + list.length + ' times to reach ' + rightNum;
			break;
		}

		if (checkbox.checked == true) {
			checkMax(maxNum);
			break;
		}

	}

}

function checkMax(maxNum) {
	let chanceResult = document.getElementById('chanceResult');
	let maxList = [];

	while (true) {
		let randomNum2 = Math.floor(Math.random() * (maxNum + 1));

		maxList.push(randomNum2);

		if (randomNum2 == maxNum) {
			chanceResult.innerHTML = 'Rolled: ' + maxList.length + ' times to reach ' + maxNum;
			break;
		}

	}

	console.log(maxList);

}


//
//checkbox.addEventListener('change', check);
//
//function check(){
//	
//	if (checkbox.checked) {
//		
//	}
//	
//}
