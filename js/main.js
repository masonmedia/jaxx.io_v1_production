 $(document).ready(function() {

// page transitions
    
$(".animsition").animsition({
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
//    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

//nav change color on scroll 
     
$(document).scroll(function () {
    $('nav, .navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
 
//close mobile menu on li click and body click
     
$('.navbar-nav>li>a, body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
     
//bootsrap carousel slide timing
  
//$('.carousel').carousel({
//    interval: 4000
//})
     
// Rellax parallax
     
  var rellax = new Rellax('.rellax', {
//    wrapper: '.rellax-wrap',
    speed: -1,
    center: true,
//    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  
     
//GSAP + Scroll Magic
    
// init
    
var controller = new ScrollMagic.Controller();
            
//GSAP tweens
     
//home pager banner timeline 
     
var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.from(".navy-bg", 0.2, {autoAlpha:0, ease: SlowMo.easeIn})

//slide down navbar     
.from("nav", 0, {autoAlpha:0, y:-100})
     
//fade in navbar logo + nav links
.staggerFrom(".navbar-brand, .nav-item, .navbar-toggler", 0.2, {autoAlpha:0, y:-10, rotation:-20}, 0.05)

//fade in Jaxx Liberty Logo
.from("#home .jaxx-logo", 0.8, {autoAlpha: 0, y: -20, ease: SlowMo.easeInOut}, "-=0.25")
         
//fade out multi device bg
.to("#home #jaxx-multi-device", 0.4, {autoAlpha:0, display: "none", ease: SlowMo.ease.config(0.1, 0.4, false)}, "-=0.25")

// fade out Jaxx Liberty Logo
.to("#home .jaxx-logo", 0.7, {autoAlpha: 0, display: "none", ease: SlowMo.easeInOut}, "-=0.25")

//fade in orange-bg 
.from("#home .orange-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeInOut})

//fade out navy-bg 
.to("#home .navy-bg", 0, {autoAlpha:0, ease: SlowMo.easeInOut})

// stagger in site tag line individual words
.staggerFrom("#home .banner-span", 0.25, {y:-100, autoAlpha:0, ease: SlowMo.easeInOut}, 0.1)

//fade in tag line sub titles
.staggerFrom(".sub-tagline-1, .sub-tagline-2, .sub-tagline-3", 0.25, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, 0.1)
   
//fade out orange-bg
.to("#home .orange-bg", 0.5, {autoAlpha:0, ease: SlowMo.easeInOut}) 
 
//fade in heart logo
.from("#home .jaxx-icon", 0.3, {y:-20, autoAlpha:0, ease: SlowMo.easeInOut}, "-=0.25")

//add a label 0.5 seconds later to mark the placement of the next tween
.from("#home .banner-button", 0.3, {autoAlpha:0, ease: SlowMo.easeIn}, "-=0.25")
  
//fade in arrow down
.from("#home .icon", 0.5, {autoAlpha:0, y:-10, ease: SlowMo.easeIn}, "-=0.25")
.to("#home .icon", 1, {y:-10, ease: SlowMo.easeInOut, repeat:-1}); //standard banner ending -- add semi colon to return

// individual tweens
      
//fade in

$(".fade-in-slow").each(function() {

 	var fadeIn = TweenMax.from(this, 3, {autoAlpha: 0, delay: 0, ease: SlowMo.easeInOut}, .5);

	var scene0 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeIn)
		.addTo(controller);
}); 
   
//fade out
     
$(".fade-out").each(function() {

 	var fadeOut = TweenMax.to(this, 2, {autoAlpha: 0, delay: 0, ease: SlowMo.easeInOut});

	var scene0 = new ScrollMagic.Scene({
	        triggerElement: this,
	        triggerHook: 'onLeave',
	        offset: 0,
	        reverse:true
	    })
		.setTween(fadeOut)
		.addTo(controller);
}); 
     
//fade + enter left - scene 1

$(".fade-in-left").each(function() {

 	var fadeLeft = TweenMax.from(this, 0.5, {
	        x: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'onEnter',
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeLeft)
		.addTo(controller);
});
     
     //fade + enter left - scene 1

$(".fade-in-right").each(function() {

 	var fadeRight = TweenMax.from(this, 1, {
	        x: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'onEnter',
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeRight)
		.addTo(controller);
});
     
//fade in up 
     
$(".fade-in-up").each(function() {

 	var fadeUp = TweenMax.from(this, 0.5, {
	        y: 100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeUp)
		.addTo(controller);
});
     
     
//fade in down 
     
$(".fade-in-down").each(function() {

 	var fadeDown = TweenMax.from(this, 0.5, {
	        y: -100,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power4.easeInOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(fadeDown)
		.addTo(controller);
});
     
//  slide in from right
     
     $(".slide-in-right").each(function() {

 	var slideInRight = TweenMax.from(this, 0.8, {autoAlpha: 0, x:-50, delay: 0, ease: Elastic.easeOut.config(1, 1)});

	var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 'onEnter', offset: 0, reverse:true})
		.setTween(slideInRight)
		.addTo(controller);
}); 
    
     
//slide in from right
     
     $(".slide-in-left").each(function() {

 	var slideInLeft = TweenMax.from(this, 0.8, {autoAlpha: 0, x:50, delay: 0, ease: Elastic.easeOut.config(1, 1)});

	var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 'onEnter', offset: 0, reverse:true})
		.setTween(slideInLeft)
		.addTo(controller);
});  
    
// stagger tween scene 3 

$(".stagger-tween").each(function() {
  
  var stagger = TweenMax.staggerFrom($(this).find(".stagger-tween-item"), 1, {
    y: 40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  },
  0.3);

	var scene3 = new ScrollMagic.Scene({
	        triggerElement: this,
            triggerHook: 'this',
	        reverse:true
	    })
		.setTween(stagger)
		.addTo(controller);
});  

//content-tweens scene 4
        
$(".content-tween").each(function() {
  
  var contentTweenTL = new TimelineMax({
    repeat:0,
  });
  
  var contentTween = contentTweenTL.from($(this).find(".content-tween-left"), 0.7, {x: -100, autoAlpha: 0, delay: 0, ease: Power1.easeInOut})
  .from($(this).find(".content-tween-right"), 0.7, {x: 200, autoAlpha: 0, delay: 0, ease: Power1.easeInOut})
  .from($(this).find(".content-tween-up"), 0.7, {y: 100, autoAlpha: 0, delay: 0, ease: Power1.easeInOut})
  .from($(this).find(".content-tween-down"), 0.7, {y: -200, autoAlpha: 0, delay: 0, ease: Power1.easeInOut})
  .staggerFrom($(this).find(".content-stagger-up"), 0.7, {y: 100, autoAlpha: 0, delay: 0, ease: Back.easeInOut.config(1.7)}, .1);

	var scene4 = new ScrollMagic.Scene({
	        triggerElement: this,
//            triggerHook: '0.7',
            triggerHook: 'onEnter',
	        offset: -100,
			reverse:true
	    })
		.setTween(contentTween)
		.addTo(controller);
});
    
//end all doc ready
});

//zendesk widget options
$(document).ready(function(){
    window.zESettings = {
      webWidget: {
          launcher: {
                  label: {
                    'en-US': 'Help?',
                    'fr': 'Besoin d\'aide?'
                  }
                },
          helpCenter: {
          title: {
            'en-US': 'Jaxx Liberty Support',
            'fr': 'Recherche d\'aide'
          },
              messageButton: {'*': 'Get in touch'
          }
        },
        color: {
          theme: '#fff',
          launcher: '#264277',
          launcherText: '#fff',
          button: '#ff6902',
          resultLists: '#ff6902',
          header: '#ff6902',
          title: '#fff',
          articleLinks: '#ff6902'
        }
      }
    };
});


//smooth scroll --> https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).ready(function() {
    $('a[href*="#"]').on('click', function (e) {
	   e.preventDefault();

	   $('html, body').animate({
		  scrollTop: $($(this).attr('href')).offset().top
	   }, 500, 'linear');
    });
});


//os detect

function getOS()
{
        var nAgt = navigator.userAgent;
        var os = "unknown";
        var desktopTitle = document.querySelector('#desktopTitle');
        var desktopLink = $('#desktopLink');
//        var downloadLinks = ["https://github.com/Jaxx-io/Jaxx/releases/tag/v1.3.8",
//            "https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.8/Jaxx-setup-1.3.8.exe",
//            "https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.8/Jaxx-1.3.8.dmg",
//            "https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.8/jaxx-1.3.8-x86_64.AppImage"];
//
//             [{type: "default", link: "https://github.com/Jaxx-io/Jaxx/releases/tag/v1.3.7"},
//                 {type: "windows", link:"https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.7/Jaxx-setup-1.3.7.exe"},
//                 {type: "mac", link:"https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.7/Jaxx-1.3.7.dmg"},
//                 {type: "linux", link:"https://github.com/Jaxx-io/Jaxx/releases/download/v1.3.7/jaxx-1.3.7-x86_64.AppImage"}];

        var clientStrings = [
            {s: 'Windows', r: /(Windows 10.0|Windows NT 10.0)/},
            {s: 'Windows', r: /(Windows 8.1|Windows NT 6.3)/},
            {s: 'Windows', r: /(Windows 8|Windows NT 6.2)/},
            {s: 'Windows', r: /(Windows 7|Windows NT 6.1)/},
            {s: 'Windows', r: /Windows NT 6.0/},
            {s: 'Windows', r: /Windows NT 5.2/},
            {s: 'Windows', r: /(Windows NT 5.1|Windows XP)/},
            {s: 'Windows', r: /(Windows NT 5.0|Windows 2000)/},
            {s: 'Windows', r: /(Win 9x 4.90|Windows ME)/},
            {s: 'Windows', r: /(Windows 98|Win98)/},
            {s: 'Windows', r: /(Windows 95|Win95|Windows_95)/},
            {s: 'Windows', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s: 'Windows', r: /Windows CE/},
            {s: 'Windows', r: /Win16/},
            {s: 'Android', r: /Android/},
            {s: 'Linux', r: /(Linux|X11)/},
            {s: 'Linux', r: /(Linux|X12)/},
            {s: 'Linux', r: /(Linux|X13)/},
            {s: 'Linux', r: /(Linux|X14)/},
            {s: 'Linux', r: /(Linux|X15)/},
            {s: 'Linux', r: /(Linux|X16)/},
            {s: 'iOS', r: /(iPhone|iPad|iPod)/},
            {s: 'Mac', r: /Mac OS X/},
            {s: 'Mac', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s: 'UNIX', r: /UNIX/}
        ];

        for (var id in clientStrings)
        {
            var cs = clientStrings[id];

            if (cs.r.test(nAgt))
            {
                os = cs.s;
                break;
            }
        }

        if(os === "unknown" || os === "Android" || os === "iOS" || os === 'UNIX')
        {
            desktopTitle.innerHTML = "Desktop";
            document.querySelector('#desktopLink').href = '#downloadTable';
            desktopLink.attr('data-target', '');
            desktopLink.attr('data-toggle', '');
        }
        else
        {
            desktopTitle.innerHTML = "Desktop (" + os + ")";

            if(os === "Windows")
            {
                desktopLink.attr('data-target', '#windowsModal');
            }
            else if(os === "Mac")
            {
                desktopLink.attr('data-target', '#macModal');
            }
            else if(os === "Linux")
            {
                desktopLink.attr('data-target', '#linuxModal');
            }
        }
}

