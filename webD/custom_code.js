
    window.gwd = window.gwd || {};
    $(document).ready(function() {
      //jQuery.easing.def = 'easeOutQuint';
      /****************************Change the slide *************************************/
      var slideContainerJquery = $(".SlideShow");
      var slideContainerJqueryWrapper = $(".SlideShowContainer");
      // console.log(slideContainerJqueryWrapper);
      //slideAccesser is defined outside the stage for accessibilty to avoid globals
      slideAccesser = {
        edge_composition_ready: true,
        clickactive: true,
        currentSlideEdge: 0,
        EdgetimeOut: 'undefined',
        value: 1,
        previousSlide: 0,
        totalSlides: 3,
        direction: 'left',
        setTimer: true,
        timerDelay: 4000
      }
      SlidejQueryAnimater = {
          timerObject: 'undefined',
          timer: function() {
            if (slideAccesser.setTimer) {
              this.timerObject = setInterval(function() {
                var next = slideAccesser.previousSlide;
                next++;
                SlidejQueryAnimater.slide(next, 'left');
              }, slideAccesser.timerDelay);
            }
          },
          slide: function(currentSlide, direction) {
            //set defualt for direiction 
            direction = direction || slideAccesser.direction;
            // var slides = slideContainerJqueryWrapper.children();
            var movement = 0;
            var value;
            direction == 'left' ? value = -1 : value = 1;
            if (slideAccesser.previousSlide != currentSlide) {
              currentSlide == slideAccesser.totalSlides ? currentSlide = 0 : false;
              currentSlide < 0 ? currentSlide = (slideAccesser.totalSlides - 1) : false;
              //swap slides 
              $('.image' + currentSlide).appendTo(slideContainerJqueryWrapper)
              var numberFix;
              direction == 'left' ? numberFix = -112 : numberFix = -112;
              $('.image' + currentSlide).css('left', value * (numberFix) + '%');
              movement = value * (112);
              slideAccesser.previousSlide = currentSlide;
            }
            slideAccesser.currentSlideEdge = currentSlide;
            /*             console.log(slideContainerJqueryWrapper[0]); */
            addBorders();
            slideContainerJqueryWrapper.animate({
              left: movement + '%'
            }, {
              duration: 1000,
              complete: function() {
                slideAccesser.clickactive = true;
                //place current slide at the 0 position 
                $('.image' + currentSlide).css('left', '0%');
                //put every other image on the other side right 100% or lef -100%
                $.each(slideContainerJqueryWrapper.children(), function(index, element) {
                  $(element).not('.image' + currentSlide).css({
                    left: value * (-212) + '%'
                  });
                });
                //finally place entire container at 0 position 
                slideContainerJqueryWrapper.css('left', '0');
              }
            });
            //top slides 
            //var currentTop = currentSlide;
            /*var currentTop = (currentSlide > 0 && currentSlide < 3) ? 1 : (currentSlide > 3 && currentSlide < 6) ? 4 : currentSlide;
            $(".top" + currentTop).appendTo($('.topSlidesContainer')).animate({opacity: '0.90'}, this.duration, function() {
              $('.topSlidesContainer').children().not(".top" + currentTop).css({opacity: '0.01'});
            });*/
          }
        }
        //activate slider;
      SlidejQueryAnimater.timer();
      /*************************/
      addBorders();

      function addBorders() {
        switch (slideAccesser.currentSlideEdge) {
          case 0:
            // console.log('slide 0');
            document.getElementById("border0").style.border = "3px solid black";
            document.getElementById("border1").style.border = "0";
            document.getElementById("border2").style.border = "0";
            break;
          case 1:
            // console.log('slide 1');
            document.getElementById("border1").style.border = "3px solid black";
            document.getElementById("border0").style.border = "0";
            document.getElementById("border2").style.border = "0";
            break;
          case 2:
            // console.log('slide 2');
            document.getElementById("border2").style.border = "3px solid black";
            document.getElementById("border1").style.border = "0";
            document.getElementById("border0").style.border = "0";
            break;
          default:
        }
      }
      $('#exit-button-click').click(function() {
        $('#second-part').css({
          display: 'none'
        });
        $('#first-part').css({
          display: 'inherit'
        });
      });
      $('#click-through-to-site').click(function(event) {
        var slide = $(this), title = $(this).attr('id');
        slide.data('title', title);
        slide.data('link', eval("clickTag"));
        edgeClick(event, slide, 'click');
      });
      //first part code
      $('#model-click-div').click(function() {
        var diffValue = $('#bottom-elem-test').css('top');
        $("#scroller-container").animate({
          scrollTop: diffValue
        }, 600, function() {
          ShopButtonAppear();
        });
      });
      $("#scroller-container").scroll(function() {
        var scrollerValue = $("#scroller-container").scrollTop();
        $("#main-text").css({
          opacity: 1 - (scrollerValue / 400)
        });
        $("#meet-the-model-id").css({
          opacity: 1 - (scrollerValue / 400)
        });
        $("#dark-overlay-id").css({
          opacity: 0 + (scrollerValue / 1400)
        });
        $("#background-image-id").css({
          top: 0 - (scrollerValue / 10)
        })
        var heightValue = parseFloat(($("#scroller-container").css('height')));
        if (scrollerValue > (heightValue * 0.95)) {
          ShopButtonAppear();
        }
      });

      function ShopButtonAppear() {
        $('#to-shop-button').animate({
          opacity: 1
        }, 400, function() {});
        $('#to-shop-click-div').css({
          display: 'inherit'
        });
      }
      $('#to-shop-click-div').click(function() {
        var diffValue = $('#scroller-container').css('height');
        $("#scroller-container").scrollTop(parseFloat(diffValue));
        //open second opart of unit
        $('#second-part').css({
          display: 'inherit'
        });
        $('#first-part').css({
          display: 'none'
        });
      });
    });
    gwd.arrow_right = function(event) {
      if (slideAccesser.clickactive) {
        //remove timer 
        if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
          clearInterval(SlidejQueryAnimater.timerObject);
          SlidejQueryAnimater.timerObject = 'undefined';
        }
        slideAccesser.clickactive = false;
        var next = slideAccesser.previousSlide;
        // console.log(next);
        next++;
        SlidejQueryAnimater.slide(next, 'left');
        //tracking
        var currentButtonTrack = $('#arrow_right');
        currentButtonTrack.data('title', 'arrow left pressed');
        edgeClick(event, currentButtonTrack, 'mousepress'); // insert code for mouse click here*/
      }
      // insert code for mouse click here
    };
    gwd.arrow_left = function(event) {
      if (slideAccesser.clickactive) {
        //remove timer 
        if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
          clearInterval(SlidejQueryAnimater.timerObject);
          SlidejQueryAnimater.timerObject = 'undefined';
        }
        slideAccesser.clickactive = false;
        var prev = slideAccesser.previousSlide;
        prev--;
        SlidejQueryAnimater.slide(prev, 'right');
        //tracking
        var currentButtonTrack = $('#arrow_left');
        currentButtonTrack.data('title', 'arrow right pressed');
        edgeClick(event, currentButtonTrack, 'mousepress'); // insert code for mouse click here	*/
      }
      // insert code for mouse click here
    };
    gwd.image_0 = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      slideAccesser.clickactive = false;
      SlidejQueryAnimater.slide(0);
    };
    gwd.image_1 = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      slideAccesser.clickactive = false;
      SlidejQueryAnimater.slide(1);
    };
    gwd.image_2 = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      slideAccesser.clickactive = false;
      SlidejQueryAnimater.slide(2);
    };
    gwd.image_3 = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      slideAccesser.clickactive = false;
      SlidejQueryAnimater.slide(3);
    };
    gwd.clickThrough = function(event) {
      // console.log(slideAccesser.currentSlideEdge);
      //tracking
      var slide = $(this),
        title = $(this).attr('id');
      switch (title) {
        case 'linkToSite':
          // console.log("it works!");
          slide.data('title', title);
          slide.data('link', clickTag);
          break;
        default:
          slide.data('title', title);
          slide.data('link', clickTag);
      }
      slide.addClass('campaign-link');
      edgeClick(event, slide, 'click');
    };
  