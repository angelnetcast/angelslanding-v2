// Replace the username in this url with your last.fm useername
const URL =
	"https://lastfm-last-played.biancarosa.com.br/angelnetcast/latest-song";
let art = document.querySelector("#cover-art");
let artist = document.querySelector("#artist");
let song = document.querySelector("#song");
let timestamp = document.querySelector("#timestamp");

// Adds the marquee class if the element overflows, removes it if not. This lets the text animate on a per-song basis.
function animateText(element) {
	element.offsetWidth < element.scrollWidth
		? element.classList.add("marquee")
		: element.classList.remove("marquee");
}
const getTrack = async () => {
	const request = await fetch(URL);
	const json = await request.json();
	let isPlaying = json.track["@attr"]?.nowplaying || false;
	song.innerHTML = json["track"]["name"] + "<br>";
	artist.innerHTML = json["track"]["artist"]["#text"] + "<br>";
	art.style.content = `url(${json.track.image[2]["#text"]})`;
	animateText(song);
	animateText(artist);

	if (isPlaying) {
		timestamp.innerHTML = "Listening right now!";
	} else {
		let time = new Date(json["track"]["date"]["uts"] * 1000);
		let options = {
			month: "numeric",
			day: "numeric",
			year: "2-digit",
			hour: "numeric",
			minute: "2-digit",
		};
		timestamp.innerHTML = "Listened on " + time.toLocaleString([], options);
	}
};
setInterval(() => {
	getTrack();
}, 10000);
getTrack();
