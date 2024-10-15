$(document).ready(function () {
	$("a.nav-link").on("click", function (e) {
		if (this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top - 50,
				},
				800
			);
		}
	});

	$(window).on("scroll", function () {
		let scrollPos = $(document).scrollTop();
		$(".nav-link").each(function () {
			let currLink = $(this);
			let refElement = $(currLink.attr("href"));
			if (
				refElement.position().top <= scrollPos &&
				refElement.position().top + refElement.height() > scrollPos
			) {
				$(".nav-link").removeClass("active");
				currLink.addClass("active");
				currLink.css("background-color", "white");
			} else {
				currLink.css("background-color", "transparent");
			}
		});
	});
});
