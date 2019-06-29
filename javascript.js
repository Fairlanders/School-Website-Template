const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
})
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('#outer-nav-ul').addClass('black');
        $('#logo').addClass('white');
        $('#first-li').addClass('white')
        $('#second-li').addClass('white')
        $('#third-li').addClass('white')
        $('#forth-li').addClass('white')
        $('#fifth-li').addClass('white')
  }

  else {
        $('#outer-nav-ul').removeClass('black');
        $('#first-li').removeClass('white')
        $('#logo').removeClass('white');
        $('#second-li').removeClass('white')
        $('#third-li').removeClass('white')
        $('#forth-li').removeClass('white')
        $('#fifth-li').removeClass('white')
        $('#first-li').removeClass('white')
  }
})
function myFunction(){
    $('.list').toggleClass('visible');
}

