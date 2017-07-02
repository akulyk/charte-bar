// custom.js


jQuery(document).ready(function ($) {
    
    $('#myCarousel').carousel({
  interval: 3500
});
    
     var offset = 400;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.onTop').fadeIn(duration);
        } else {
            jQuery('.onTop').fadeOut(duration);
        }
    });
    
    $(".onTop").click(function () {
        var elementClick = $(this).attr("href");
       // var destination = $(elementClick).offset().top;
        
            $('body, html').animate({ scrollTop:0 }, 1100);
       
        return false; 
    });
    
     $('#highlighted li.active-trail').html('<table><tr><td width="19"></td><td class="iCont">'+$('#highlighted li.active-trail').html()+'</td><td width="19" style="background:url(/sites/all/themes/chartetheme/img/podlojki/podlojka_nobg_right.png); width:19px;"></td></tr></table>');
    
 
 jQuery('#highlighted a').gradientText({
      colors: ['#91700e', '#d7b85a', '#91700e']
   });
    
  
    
   // addVenzels ();
   // $('.top_left_venzel').wrap('<div class="top_left_venzel_parent" style="position:relative; float:left; margin:10px;'+$('.top_left_venzel').attr( "style" )+'"></div>');
    
    
   $('.top_left_venzel').each(function (index) {$( this).wrap('<div class="top_left_venzel_parent" style="position:relative; float:left; margin:20px;'+$(this).attr('style')+'"></div>');});
     
   $('.bottom_right_venzel').each(function (index) {$( this).wrap('<div class="bottom_right_venzel_parent" style="position:relative; float:left; margin:20px;'+$(this).attr('style')+'"></div>');});
    
    $('.top_left_venzel_slider .nivoSlider').each(function (index) {$( this).wrap('<div class="top_left_venzel_parent" style="position:relative; float:left; margin:20px;'+$(this).attr('style')+'"></div>');});
     
  $('.bottom_right_venzel_slider .nivoSlider').each(function (index) {$( this).wrap('<div class="bottom_right_venzel_parent" style="position:relative; float:left; margin:20px;'+$(this).attr('style')+'"></div>');});
    
   
     $('.top_left_venzel_parent').append('<img style="position:absolute; z-index:90; top:-30px; left:-30px;" src="/sites/all/themes/chartetheme/img/top_left_venzel.png" />');
    
     
     $('.bottom_right_venzel_parent').append('<img style="position:absolute; z-index:90; bottom:-30px; right:-30px;" src="/sites/all/themes/chartetheme/img/bottom_right_venzel.png" />');
    
    
    
  //  $('.full1280').height($(window).height());
 //   var $tmp_h=$('.full1280').height()-100;
 //  console.log ( $('.full1280').height() );
 // //  console.log($tmp_h);
  $('.background_nice').height( $(window).height() );
    

// NOTE: Age restriction functionality
function showPopup(whichpopup) {
  var docHeight = $(document).height(); 
  $('.overlay-bg').show().css({'height' : docHeight});
  $('.popup-'+whichpopup).show().css({'top': 70+'px'});
}

// function to close our popups
function closePopup() {
  $('.overlay-bg, .overlay-container').hide();
}

function switchPopup(currentPopup, nextPopup) {
  var scrollTop = $(window).scrollTop();
  $('.popup-'+currentPopup).hide(); 
  $('.popup-'+nextPopup).show().css({'top': 70+'px', 'z-index': 10002});
}

$('.btn-approve').click(function(){
  closePopup();
});

$('.btn-decline').click(function(){
  switchPopup("age-restriction", "access-declined");
});

var ref = document.referrer;
if (!ref.match(/^https?:\/\/([^\/]+\.)?charte\-bar\.com/i)) {
   showPopup("age-restriction");
}

        
});



/*function addVenzels () {
    
    jQuery('top_left_venzel').each(function(index) {
    
    $thenew = jQuery('.top_left_venzel').innerHTML();
    alert($thenew);
    }
    );
    
    
}
*/