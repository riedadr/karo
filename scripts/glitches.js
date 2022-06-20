const phase1Time = new Date("2022-06-21T01:20:00+02:00");
const phase2Time = new Date("2022-06-21T01:21:00+02:00");
const phase3Time = new Date("2022-06-21T01:22:00+02:00");
/*
const phase1Time = new Date("2022-06-21T07:50:00+02:00");
const phase2Time = new Date("2022-06-21T09:20:00+02:00");
const phase3Time = new Date("2022-06-21T11:05:00+02:00");
*/
//Fisch Overlay (wird von timing.js gestartet)
function startOverlay(time) {
	let now = new Date(time);

	setInterval(() => {
		now.setSeconds(now.getSeconds() + 1);

		if (phase1Time < now) {
			if (phase1Time < now && now < phase2Time) {
				if (
					(updateTimer <= 55 && updateTimer > 50) ||
					(updateTimer <= 30 && updateTimer > 20)
				) {
					toggleLag(true);
					togglePhase(1, true);
				} else {
					toggleLag(false);
					togglePhase(1, false);
				}
			} else if (phase2Time < now && now < phase3Time) {
				togglePhase(1, false);

				toggleLag(true);
				togglePhase(2, true);
			} else if (phase3Time < now) {
				togglePhase(2, false);

				toggleLag(true);
				togglePhase(3, true);
			} else {
				toggleLag(false);
			}
		}

		//Testing
		/*
	if (updateTimer <= 55 && updateTimer > 45) {
		togglePhase(1, true);
		toggleLag(true);
	} else {
		toggleLag(false);
	}
    */
	}, 1000);
}

function toggleLag(state) {
	const overlay = document.getElementById("lag");
	if (state) {
		overlay.style.display = "flex";
		overlay.style.opacity = 1;
	} else {
		overlay.style.display = "none";
		overlay.style.opacity = 0;
	}
}

function togglePhase(phaseNr, state) {
	const phase = document.getElementById("phase" + phaseNr);
	if (state) {
		phase.style.display = "flex";
	} else {
		phase.style.display = "none";
	}
}
