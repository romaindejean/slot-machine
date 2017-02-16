$(document).ready(function() {

  $('#get-caffeine').on('click', function() {
    $('#slot-1').toggleClass('slot-1-running');
    $('#slot-2').toggleClass('slot-2-running');
    $('#slot-3').toggleClass('slot-3-running');
  });

});