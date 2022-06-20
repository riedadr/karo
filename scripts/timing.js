//?Zeiten für Fisch Overlay
let updateTimer = 60;		//Sekunden, nach denen die Seite neu geladen werden soll
const startTime = new Date("2022-06-20T02:15:00+02:00");
const endTime = new Date("2022-06-20T02:15:10+02:00");


const time = document.getElementById("update");
let now = new Date();
let dd = twoDigits(now.getDate());
let mm = twoDigits(now.getMonth() + 1);
let yyyy = now.getFullYear();
let h = twoDigits(now.getHours());
let m = twoDigits(now.getMinutes());
let s = twoDigits(now.getSeconds());
time.innerText = dd + "." + mm + "." + yyyy + " " + h + ":" + m + ":" + s;

function twoDigits(val) {
	if (val.toString().length < 2) {
		for(let i = 0; i < 2 - val.toString().length; i++) {
			val = "0" + val;
		}
	}
	return val;
}

const timerElement = document.getElementById("timer");
setInterval(() => {
	updateTimer--;
	timerElement.innerText = updateTimer;
	if (updateTimer == 0) window.location.href = "/";
}, 1000);



//Fisch Overlay
const overlay = document.getElementById("lag");
setInterval(() => {
	now.setSeconds(now.getSeconds() + 1);

	if (startTime < now && now < endTime) {
		overlay.style.display = "flex";
		overlay.style.opacity = 1;
	} else {
		overlay.style.display = "none";
		overlay.style.opacity = 0;
	}

	//zum Testen (in Production entfernen)
	if (updateTimer <= 50 && updateTimer > 40) {
		overlay.style.display = "flex";
		overlay.style.opacity = 1;
	} else {
		overlay.style.display = "none";
		overlay.style.opacity = 0;
	}

}, 1000);