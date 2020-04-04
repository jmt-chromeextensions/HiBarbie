const BARBIE_GIRL_YOUTUBE_URL = 'https://youtu.be/ZyhrYis509A?t=15';

$(document).ready(function() {
		
	// Once the document is loaded, all the <a> elements it initially contains are assigned the function that redirects to Barbie Girl video as a click handler. 
	$("a").click(function() {
		forgetItGoPlayBarbieGirl();
	});

	// Since new <a> elements added to the page are wanted to behave the same way, this MutationObserver
	// is used to detect when they are included so the click handler can be assigned to them too.
	var mutationObs = new MutationObserver(function (mutations) {
		for (let i = 0, length = mutations.length; i < length; i++) {
			if (mutations[i].addedNodes[0]) {
				$(mutations[i].addedNodes[0]).find("a").each(function () {
					$(this).click(function() {
						forgetItGoPlayBarbieGirl();
					});
				});
			}
		}
	});

	// Initialize observation
	mutationObs.observe(document.body, { childList: true, subtree: true });
	
});

// Remove the default actions of clicked elements and go to Barbie Girl YouTube video
function forgetItGoPlayBarbieGirl() {
	event.preventDefault();
	window.location.assign(BARBIE_GIRL_YOUTUBE_URL);
}