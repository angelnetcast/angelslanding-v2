const sidebar = ` 
<p>
					<a href="/pages/music.html" >my music</a>
					<br />
					<a href="/pages/music/albums.html" >album review</a>
					<br />
					<a href="/pages/music/collection.html" 
						>physical collection</a
					>
					<br />
					<a href="/pages/music/sotmarchive.html" >archive</a>
					<br>
					<a href="/pages/music/cdworld.html" >CDwORLD</a>
				</p>
				
`;

document.getElementById("sidebar").innerHTML = sidebar;

const footer = ` 	
<p><a href="/pages/home.html">time to go home?</a></p>
<p>
	find me at:
	<br />
	<a href="https://rateyourmusic.com/~angelnetcast">rate your music</a>|
	<a href="https://soundcloud.com/angelnetcast">soundcloud</a>|
	<a href="https://www.last.fm/user/angelnetcast">last.fm</a>
</p>
				
`;

document.getElementById("footer").innerHTML = footer;
