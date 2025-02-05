///
// PhotoViewer launcher for EZ Gallery by netfriend - https://netfriend.neocities.org/ez-gallery/
// Released under the Unlicense - https://unlicense.org/
// Requires PhotoViewer - https://nzbin.github.io/photoviewer/
///

///
// CODE
///
// Don't edit below this line unless you know what you're doing!
///

(function () {
	const defaultOptions = {
		draggable: false,
		resizable: false,
		initMaximized: true,
		headerToolbar: ["close"],
		footerToolbar: ["prev", "zoomOut", "actualSize", "zoomIn", "next"],
		title: false,
		multiInstances: true,
	};

	const galleries = document.getElementsByClassName("ezgallery");

	for (let i = 0; i < galleries.length; i++) {
		let links = [...galleries[i].getElementsByTagName("a")];

		for (let j = 0; j < links.length; j++) {
			let items = [];
			let itemOptions = { ...defaultOptions, index: j };
			links.map((link) => items.push({ src: link.href }));
			links[j].addEventListener(
				"click",
				(event) => {
					event.preventDefault();
					new PhotoViewer(items, itemOptions);
				},
				false
			);
		}
	}
})();
