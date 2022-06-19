//Heute
const heute = document.getElementById("dataHeute").children;
console.log(heute);

scrollHeute();
function scrollHeute() {
	let currentRow = 0;
	setInterval(() => {
        if (currentRow >= heute.length) currentRow  = 0;
        console.log("Heute", currentRow);
        
		let row = document.getElementById("dataHeuteRow" + currentRow);
		row.scrollIntoView();
		currentRow++;
	}, 1000);
}

const morgen = document.getElementById("dataMorgen").children;

    scrollMorgen();
function scrollMorgen() {
	let currentRow = 0;
	setInterval(() => {
        if (currentRow >= morgen.length) currentRow  = 0;
        console.log("Morgen", currentRow);
        
		let row = document.getElementById("dataMorgenRow" + currentRow);
		row.scrollIntoView();
		currentRow++;
	}, 1000);
}