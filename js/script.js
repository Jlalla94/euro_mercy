var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  $("#nav-list").on("click", "a", function (event) {

    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

    $("#nav-list").css('top', '-500px');
  });
  $("#burger").click(function () {
    $("#nav-list").css('top', '0');
  });
});
jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $("#nav-list");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $("#nav-list").css('top', '-500px');
    }
  });
});



function firstevent(id) {
  document.getElementsByClassName("inter show")[0].className = "inter"
  document.getElementById(id).className = "inter show"
}




$(document).ready(function () { 
  $('a#go').click(function (event) { 
    event.preventDefault(); 
    $('#overlay').fadeIn(400, 
      function () { 
        $('#modal_form')
          .css('display', 'block') 
          .animate({
            opacity: 1,
            top: '50%'
          }, 200); 
      });
  });
  
  $('#modal_close, #overlay').click(function () { 
    $('#modal_form')
      .animate({
          opacity: 0,
          top: '45%'
        }, 200, 
        function () { 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400); 
        }
      );
  });
});