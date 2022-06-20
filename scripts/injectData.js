injectDay("dataHeute", "/data/heute.json");
injectDay("dataMorgen", "/data/morgen.json");
injectNotes();

function injectDay(tbodyID, json) {
	const tbody = document.getElementById(tbodyID);

	fetch(json)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((item, index) => {
				let row = document.createElement("tr");
				row.id = tbodyID + "Row" + index;

				let klasse = document.createElement("td");
                klasse.className = "klasse";
				klasse.innerText = item.klasse;
				row.appendChild(klasse);

				let std = document.createElement("td");
				std.className = "std";
				std.innerText = item.std;
				row.appendChild(std);

				let abw = document.createElement("td");
				abw.className = "abw";
				abw.innerText = item.abw;
				row.appendChild(abw);

				let ver = document.createElement("td");
				ver.className = "ver";
				ver.innerText = item.ver;
				row.appendChild(ver);

				let raum = document.createElement("td");
				raum.className = "raum";
				raum.innerText = item.raum;
				row.appendChild(raum);

				let info = document.createElement("td");
				info.className = "info";
				info.innerText = item.info;
				row.appendChild(info);

				tbody.appendChild(row);
			});
		});
}

function injectNotes() {
	const notes = document.getElementById("notes");
	fetch("/data/nachrichten.json")
	.then(res => res.json())
	.then(data => {
		data.forEach((item, index) => {
			let note = document.createElement("div");
			note.className = "note";
			note.id = "note" + index;

			let datum = document.createElement("time");
			datum.innerText = item.datum;
			note.appendChild(datum);

			let woche = document.createElement("p");
			woche.innerText = item.woche + "-Woche";
			note.appendChild(woche);

			let nachrichten = document.createElement("ul");
			item.nachrichten.forEach((msg) => {
				let li = document.createElement("li");
				li.innerText = msg;
				nachrichten.appendChild(li);
			})
			note.appendChild(nachrichten);

			notes.appendChild(note);
		});
	})
}