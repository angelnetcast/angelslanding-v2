// source: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
window.addEventListener("DOMContentLoaded", () => {
	// Only handle one particular tablist; if you have multiple tab
	// lists (might even be nested), you have to apply this code for each one
	const tabList = document.querySelector('[role="tablist"]');
	const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

	// Add a click event handler to each tab
	tabs.forEach((tab) => {
		tab.addEventListener("click", changeTabs);
	});

	// Enable arrow navigation between tabs in the tab list
	let tabFocus = 0;

	tabList.addEventListener("keydown", (e) => {
		// Move right
		if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
			tabs[tabFocus].setAttribute("tabindex", -1);
			if (e.key === "ArrowRight") {
				tabFocus++;
				// If we're at the end, go to the start
				if (tabFocus >= tabs.length) {
					tabFocus = 0;
				}
				// Move left
			} else if (e.key === "ArrowLeft") {
				tabFocus--;
				// If we're at the start, move to the end
				if (tabFocus < 0) {
					tabFocus = tabs.length - 1;
				}
			}

			tabs[tabFocus].setAttribute("tabindex", 0);
			tabs[tabFocus].focus();
		}
	});
});

function changeTabs(e) {
	const targetTab = e.target;
	const tabList = targetTab.parentNode;
	const tabGroup = tabList.parentNode;

	// Remove all current selected tabs
	tabList
		.querySelectorAll(':scope > [aria-selected="true"]')
		.forEach((t) => t.setAttribute("aria-selected", false));

	// Set this tab as selected
	targetTab.setAttribute("aria-selected", true);

	// Hide all tab panels
	tabGroup
		.querySelectorAll(':scope > [role="tabpanel"]')
		.forEach((p) => p.setAttribute("hidden", true));

	// Show the selected panel
	tabGroup
		.querySelector(`#${targetTab.getAttribute("aria-controls")}`)
		.removeAttribute("hidden");
}
