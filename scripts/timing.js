let updateTimer = 60; //Sekunden, nach denen die Seite neu geladen werden soll

const time = document.getElementById("update");
const timerElement = document.getElementById("timer");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "9cfe91c0aemsh85402594fda58fdp1eb483jsnb8a2def2a7c4",
		"X-RapidAPI-Host": "world-clock.p.rapidapi.com",
	},
};

fetch("https://world-clock.p.rapidapi.com/json/utc/now", options)
	.then((response) => response.json())
	.then((response) => {
		console.log(response);
		showTime(response.currentDateTime);
	})
	.catch((err) => console.error(err));

function showTime(fetchedTime) {
	console.log(fetchedTime);
	let loadTime = new Date(fetchedTime);
	let dd = twoDigits(loadTime.getDate());
	let mm = twoDigits(loadTime.getMonth() + 1);
	let yyyy = loadTime.getFullYear();
	let h = twoDigits(loadTime.getHours());
	let m = twoDigits(loadTime.getMinutes());
	let s = twoDigits(loadTime.getSeconds());
	time.innerText = dd + "." + mm + "." + yyyy + " " + h + ":" + m + ":" + s;
}


function twoDigits(val) {
	if (val.toString().length < 2) {
		for (let i = 0; i < 2 - val.toString().length; i++) {
			val = "0" + val;
		}
	}
	return val;
}

setInterval(() => {
	updateTimer--;
	timerElement.innerText = updateTimer;
	if (updateTimer == 0) window.location.href = "/";
}, 1000);
