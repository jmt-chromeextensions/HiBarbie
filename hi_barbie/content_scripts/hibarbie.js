const BARBIE_GIRL_YOUTUBE_URL = 'https://youtu.be/ZyhrYis509A?t=15';

$(document).ready(barbifyAllLinks);

function barbifyAllLinks() {
	// Once the document is loaded, all the <a> elements it initially contains are assigned the function that redirects to Barbie Girl video as a click handler. 
	$("a").click(function(event) {
		forgetItGoPlayBarbieGirl(event);
	});

	// Since new <a> elements added to the page are wanted to behave the same way, this MutationObserver
	// is used to detect when they are included so the click handler can be assigned to them too.
	var mutationObs = new MutationObserver(function () {
		$("a:not(.barbified-link)").each(function () {
			$(this).addClass("barbified-link");
			$(this).click(function(event) {
				forgetItGoPlayBarbieGirl(event);
			});
		});
	});

	// Initialize observation
	mutationObs.observe(document.body, { childList: true, subtree: true });
}

// Remove the default actions of clicked elements and go to Barbie Girl YouTube video
function forgetItGoPlayBarbieGirl(e) {
	e.preventDefault();
	window.location.assign(BARBIE_GIRL_YOUTUBE_URL);
}