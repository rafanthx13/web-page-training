function openTab(ActivatedTab, thisLi) {

  var i;
	// Hidden and Show Tabs
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(ActivatedTab).style.display = "block";
	// remove oehtres class Tabs
	var j;
	var y = document.getElementsByClassName('click-tab');
	for (i = 0; i < y.length; i++) {
    y[i].classList.remove("active");
  }
	thisLi.classList.add('active')
}

//



new Splide( '#splide1', {
	type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: '10%',
    throttle: 300,
    breakpoints: {
      1440: {
        perPage: 1,
        padding: '30%'
      }
    }
  }).mount();

new Splide( '#splide2', {
	type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: '10%',
    throttle: 300,
    breakpoints: {
      1440: {
        perPage: 1,
        padding: '30%'
      }
    }
  }).mount();

// Change Splider

function showSplider(SelectedSplider, number) {
	var numberSelected = number
	var numberNotSelected = + !(number) // inverte de 0 <<-->>

	var buttons =	document.getElementsByClassName('btn-project')
	buttons[numberSelected].classList.add('btn-project-active')
	buttons[numberNotSelected].classList.remove('btn-project-active')

	var splides =	document.getElementsByClassName('splide')
	splides[numberSelected].style.display = 'block'
	splides[numberNotSelected].style.display = 'none'

}
