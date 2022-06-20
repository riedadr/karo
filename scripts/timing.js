let updateTimer = 60; //Sekunden, nach denen die Seite neu geladen werden soll

const time = document.getElementById("update");
const timerElement = document.getElementById("timer");

fetch("https://worldtimeapi.org/api/ip", {
	method: "GET",
})
	.then((response) => response.json())
	.then((response) => {
		console.log(response);
		showTime(response.datetime);
		startOverlay(response.datetime);
	})
	.catch((err) => {
		console.error(err);
		let fallbackTime = new Date();
		showTime(fallbackTime.toUTCString());
		startOverlay(fallbackTime.toUTCString());
	});

function showTime(fetchedTime) {
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
