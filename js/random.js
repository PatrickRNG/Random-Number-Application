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

	// numR(randomNum);

	let checkbox = document.getElementById('check');
	let chanceResult = document.getElementById('chanceResult');
	let list = [];

	let key = true;

	while (key) {
		// let randomNum = Math.floor(Math.random() * (rightNum + 1));
		let randomNum2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

		list.push(randomNum2);

		if (randomNum2 == randomNum) {
			chanceResult.innerHTML = 'Rolled: ' + list.length + ' times to reach ' + randomNum;
			key = false;
		}

		if (checkbox.checked == true) {
			let chanceResult = document.getElementById('chanceResult');
			let maxList = [];
	
			while (key) {
				// let randomNum2 = Math.floor(Math.random() * (maxNum + 1));
				let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	
				maxList.push(randomNum);
	
				if (randomNum == maxNum) {
					chanceResult.innerHTML = 'Rolled: ' + maxList.length + ' times to reach ' + maxNum;
					key = false;
				}
				
			}
			
		}
	}
});

// function numR(rightNum) {

// 	let minNum = parseInt(document.getElementById('num1').value);
// 	let maxNum = parseInt(document.getElementById('num2').value);

// 	let checkbox = document.getElementById('check');
// 	let chanceResult = document.getElementById('chanceResult');
// 	let list = [];

// 	while (true) {
// 		// let randomNum = Math.floor(Math.random() * (rightNum + 1));
// 		let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// 		list.push(randomNum);

// 		if (randomNum == rightNum) {
// 			chanceResult.innerHTML = 'Rolled: ' + list.length + ' times to reach ' + rightNum;
// 			console.log(list);
// 			break;
// 		}

// 		if (checkbox.checked == true) {
// 			checkMax(maxNum);
// 			break;
// 		}

// 	}

// }

// function checkMax(maxNum) {

// 	let minNum = parseInt(document.getElementById('num1').value);

// 	let chanceResult = document.getElementById('chanceResult');
// 	let maxList = [];

// 	while (true) {
// 		// let randomNum2 = Math.floor(Math.random() * (maxNum + 1));
// 		let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// 		maxList.push(randomNum);

// 		if (randomNum == maxNum) {
// 			chanceResult.innerHTML = 'Rolled: ' + maxList.length + ' times to reach ' + maxNum;
// 			break;
// 		}

// 	}

// 	console.log(maxList);
// 	console.log(maxNum);

// }