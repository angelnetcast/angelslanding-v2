monthnames = new Array(
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
  "Decemeber"
);
var linkcount = 0;
function addlink(month, day, href) {
  var entry = new Array(3);
  entry[0] = month;
  entry[1] = day;
  entry[2] = href;
  this[linkcount++] = entry;
}
Array.prototype.addlink = addlink;
linkdays = new Array();
monthdays = new Array(12);
monthdays[0] = 31;
monthdays[1] = 28;
monthdays[2] = 31;
monthdays[3] = 30;
monthdays[4] = 31;
monthdays[5] = 30;
monthdays[6] = 31;
monthdays[7] = 31;
monthdays[8] = 30;
monthdays[9] = 31;
monthdays[10] = 30;
monthdays[11] = 31;
todayDate = new Date();
thisday = todayDate.getDay();
thismonth = todayDate.getMonth();
thisdate = todayDate.getDate();
thisyear = todayDate.getYear();
thisyear = thisyear % 100;
thisyear = thisyear < 50 ? 2000 + thisyear : 1900 + thisyear;
if ((thisyear % 4 == 0 && !(thisyear % 100 == 0)) || thisyear % 400 == 0) monthdays[1]++;
startspaces = thisdate;
while (startspaces > 7) startspaces -= 7;
startspaces = thisday - startspaces + 1;
if (startspaces < 0) startspaces += 7;
document.write("<table border=2 bgcolor=white ");
document.write("bordercolor=black><font color=black>");
document.write(
  "<tr><td colspan=7><center><strong>" + monthnames[thismonth] + " " + thisyear + "</strong></center></font></td></tr>"
);
document.write("<tr>");
document.write("<td align=center>Su</td>");
document.write("<td align=center>M</td>");
document.write("<td align=center>Tu</td>");
document.write("<td align=center>W</td>");
document.write("<td align=center>Th</td>");
document.write("<td align=center>F</td>");
document.write("<td align=center>Sa</td>");
document.write("</tr>");
document.write("<tr>");
for (s = 0; s < startspaces; s++) {
  document.write("<td> </td>");
}
count = 1;
while (count <= monthdays[thismonth]) {
  for (b = startspaces; b < 7; b++) {
    linktrue = false;
    document.write("<td>");
    for (c = 0; c < linkdays.length; c++) {
      if (linkdays[c] != null) {
        if (linkdays[c][0] == thismonth + 1 && linkdays[c][1] == count) {
          document.write('<a href="' + linkdays[c][2] + '">');
          linktrue = true;
        }
      }
    }
    if (count == thisdate) {
      document.write("<font color='FF0000'><strong>");
    }
    if (count <= monthdays[thismonth]) {
      document.write(count);
    } else {
      document.write(" ");
    }
    if (count == thisdate) {
      document.write("</strong></font>");
    }
    if (linktrue) document.write("</a>");
    document.write("</td>");
    count++;
  }
  document.write("</tr>");
  document.write("<tr>");
  startspaces = 0;
}
document.write("</table></p>");
