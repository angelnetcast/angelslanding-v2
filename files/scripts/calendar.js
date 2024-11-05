/******************
 * Changes done: (delete this maybe)
 * refactored `new Array(...)` => `[...]`
 * assumed thisyear is always > 2000
 * `while (x > y) x -= y;` is equivalent to `x % y`
 * deleted redundant math code
 * generate all html with js instead of writing by hand

* fixed code by doengerous (faith) on discord thank you i am forever greatful o7
 * original code: https://www.javascriptfreecode.com/36.htm
 ******************/

monthnames = [
	"January",
	"Februrary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"Decemeber",
];

var linkcount = 0;

function addlink(month, day, href) {
	var entry = new Array(3);
	entry[0] = month;
	entry[1] = day;
	entry[2] = href;
	this[linkcount++] = entry;
}
Array.prototype.addlink = addlink;

linkdays = [];
monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
todayDate = new Date();

thisday = todayDate.getDay();
thismonth = todayDate.getMonth();
thisdate = todayDate.getDate();

thisyear = todayDate.getYear();
thisyear = 1900 + thisyear;

if ((thisyear % 4 == 0 && !(thisyear % 100 == 0)) || thisyear % 400 == 0)
	monthdays[1]++;

startspaces = thisdate % 7;

mainTable = document.createElement("table");

calendarTable = document.createElement("tbody");
calendarTable.border = 2;
// calendarTable.bgcolor = "white";
// calendarTable.bordercolor = "black";

headerTr = document.createElement("tr");
headerTd = document.createElement("td");
headerTd.colSpan = 7;
headerTd.innerHTML = `<center><strong>${monthnames[thismonth]} ${thisyear}</strong></center>`;

headerTr.appendChild(headerTd);

calendarTable.appendChild(headerTr);

dayTr = document.createElement("tr");
for (d of ["Su", "M", "Tu", "W", "Th", "F", "Sa"]) {
	dayTd = document.createElement("td");
	dayTd.align = "center";
	dayTd.innerHTML = d;
	dayTr.appendChild(dayTd);
}
calendarTable.appendChild(dayTr);

firstTr = document.createElement("tr");
for (s = 0; s < startspaces; s++) {
	firstTr.appendChild(document.createElement("td"));
}

count = 1;

while (count <= monthdays[thismonth]) {
	tr = count < startspaces ? firstTr : document.createElement("tr");
	for (b = startspaces; b < 7; b++) {
		linktrue = false;
		td = document.createElement("td");
		for (c = 0; c < linkdays.length; c++) {
			if (linkdays[c] != null) {
				if (linkdays[c][0] == thismonth + 1 && linkdays[c][1] == count) {
					td.innerHTML += '<a href="' + linkdays[c][2] + '">';
					linktrue = true;
				}
			}
		}
		if (count == thisdate) {
			td.innerHTML = `<font color='FF0000'><strong>${count}</strong></font>`;
		} else if (count <= monthdays[thismonth]) {
			td.innerHTML = count;
		} else {
			td.innerHTML = "";
		}
		tr.appendChild(td);
		count++;
	}
	calendarTable.append(tr);
	startspaces = 0;
}

mainTable.appendChild(calendarTable);
document.getElementById("g6").appendChild(mainTable); // g6 is the id of the calendar container
