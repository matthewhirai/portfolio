jQuery(document).ready(function () {
	$(".skills li .rating").each(function (t, i) {
		for (var a = 7, n = $(i).attr("data-rat"); a > 0; )
			$(i).append("<span></span>"), a--;
		$(i)
			.find("span")
			.each(function (t, i) {
				if (t >= n) return !1;
				$(i).animate({ opacity: 1 });
			});
	}),
		$(".photo-inner ul").carouFredSel({
			direction: "left",
			circular: !0,
			auto: !0,
			scroll: { items: 1, fx: "crossfade", duration: 1500, wipe: !0 },
			swipe: { onTouch: !0 },
			items: { width: 153 },
		});
	var t = $("#content");
	t.easytabs({
		animate: !0,
		updateHash: !1,
		transitionIn: "slideDown",
		transitionOut: "slideUp",
		animationSpeed: 600,
		tabs: ".tmenu",
		tabActiveClass: "active",
	}),
		t.find(".tabs li a").hover(
			function () {
				$(this).stop().animate({ marginTop: "-7px" }, 200);
			},
			function () {
				$(this).stop().animate({ marginTop: "0px" }, 300);
			}
		),
		$(".menu .tabs").carouFredSel({
			responsive: !0,
			direction: "left",
			circular: !1,
			infinite: !1,
			pagination: "#menu-controls",
			auto: !1,
			scroll: { items: 1, duration: 300, wipe: !0 },
			prev: { button: "#menu-prev", key: "right" },
			next: { button: "#menu-next", key: "left" },
			swipe: { onTouch: !0 },
			items: { width: 130, visible: { min: 2, max: 5 } },
		}),
		$(".cats-filter")
			.find("a")
			.click(function () {
				$(this).attr("data-filter");
				$(this).parent().parent().find("a").removeClass("current"),
					$(this).addClass("current");
			});
	var i = $("#portfolio-list"),
		a = $("#portfolio-filter");
	i.isotope({
		filter: "*",
		layoutMode: "masonry",
		animationOptions: { duration: 750, easing: "linear" },
	}),
		a.find("a").click(function () {
			var t = $(this).attr("data-filter");
			return (
				i.isotope({
					filter: t,
					animationOptions: { duration: 750, easing: "linear", queue: !1 },
				}),
				!1
			);
		}),
		i
			.find("img")
			.adipoli({
				startEffect: "transparent",
				hoverEffect: "boxRandom",
				imageOpacity: 0.6,
				animSpeed: 100,
			}),
		$("a[rel^='portfolio']").prettyPhoto({
			animation_speed: "fast",
			social_tools: "",
			theme: "pp_default",
			horizontal_padding: 5,
		});
});
