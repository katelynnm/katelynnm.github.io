
// external js: isotope.pkgd.js

$( document ).ready( function() {


  // Date in footer

  var today = new Date(),
    year = today.getFullYear();


  // Key Skills Hover

  $(function(){
    $(".portfolio-thumbnail").click(function(){
      $(this).toggleClass("active");

    });
    // $(".portfolio-thumbnail").mouseout(function(){
    //   $(this).removeClass("active");

    // });
    
  });

        
  // Navigation toggle

  var  mn = $(".main-nav");
      mns = "main-nav-scrolled";
      hdr = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });



  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.portfolio-cover',
    layoutMode: 'fitRows',
    getSortData: {
      // name: '.name',
      // symbol: '.symbol',
      // number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
      // numberGreaterThan50: function() {
      //   var number = $(this).find('.number').text();
      //   return parseInt( number, 10 ) > 50;
      // },
    // show if name ends with -ium
      // ium: function() {
      //   var name = $(this).find('.name').text();
      //   return name.match( /ium$/ );
      // }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


  // Date in footer
  document.getElementById('year').innerHTML = year;
  
});





// $('#filters').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $container.isotope({ filter: filterValue });
// });