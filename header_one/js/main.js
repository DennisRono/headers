$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
    $("#sticky-header").removeClass("sticky");
    $(".nav-cont").removeClass("nav-controls");
    $(".navbar-flex").removeClass("accupy");
    $(".nav-cont-l").removeClass("nav-controls-l");
    $(".link_1").removeClass("link_2");
    $(".unlist").removeClass("unlist_1");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $(".nav-cont").addClass("nav-controls");
    $(".navbar-flex").addClass("accupy");
    $(".nav-cont-l").addClass("nav-controls-l");
    $(".link_1").addClass("link_2");
    $(".unlist").addClass("unlist_1");
    $('#back-top').fadeIn(500);
	}
});

function navbar(){
    var bars = document.querySelector('.fa-bars');
    var times = document.querySelector('.fa-times');
    var unlist = document.querySelector('.unlist');
    bars.style.display = "none";
    times.style.display = "block";
    unlist.style.display = "flex";
}
function navclose(){
    var bars = document.querySelector('.fa-bars');
    var times = document.querySelector('.fa-times');
    var unlist = document.querySelector('.unlist');
    bars.style.display = "block";
    times.style.display = "none";
    unlist.style.display = "none";
}