const scrollTime  = 1500;		//Millisekunden, nach denen zur nächsten Zeile gescrollt wird

const heute = document.getElementById("dataHeute").children;
scrollHeute();
function scrollHeute() {
	let currentRow = 0;
	setInterval(() => {
		if (currentRow + 10 >= heute.length) currentRow = 0;

		let row = document.getElementById("dataHeuteRow" + currentRow);
		row.scrollIntoView();
		currentRow++;
	}, scrollTime);
}

const morgen = document.getElementById("dataMorgen").children;
scrollMorgen();
function scrollMorgen() {
	let currentRow = 0;
	setInterval(() => {
		if (currentRow >= morgen.length) currentRow = 0;

		let row = document.getElementById("dataMorgenRow" + currentRow);
		row.scrollIntoView();
		currentRow++;
	}, scrollTime);
}
