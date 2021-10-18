
/*appearance and disappearance of the search icon*/

const find = document.querySelector('#find');
const inp = document.querySelector('.search-container');

find.onclick = () => {
if ( inp.classList.contains('hide') ) {
	inp.classList.remove('hide');
}
else {
	inp.classList.add('hide');
}
}


/*adaptive menu, logo*/

$( function() {
	var top = $('.brand').height();
	var height = $('.navbar-bottom').height();
	var ddwidth = $('#dropdown').width();

	$('.search-container').css('top', top);
	$('.search-container').css('height', height);
	$('.dropdownmenu').css('width', ddwidth);

});