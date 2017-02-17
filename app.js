$(document).ready(function() {
  

  function findFinalPosition(slotNumber) {
    let finalSlotPosition = Math.ceil(Math.random()*3);
    $('#' + slotNumber).removeClass(slotNumber + '-running').addClass(slotNumber + '-stopping-' + finalSlotPosition);
  }

  $('#get-caffeine').on('click', function() {
    if (!$('#slot-one').hasClass('slot-one-running')) {
      $('#slot-one').removeClass('slot-one-stopping-1 slot-one-stopping-2 slot-one-stopping-3').addClass('slot-one-running');
      $('#slot-two').removeClass('slot-two-stopping-1 slot-two-stopping-2 slot-two-stopping-3').addClass('slot-two-running');
      $('#slot-three').removeClass('slot-three-stopping-1 slot-three-stopping-2 slot-three-stopping-3').addClass('slot-three-running');
    } else {
      findFinalPosition('slot-one');
      findFinalPosition('slot-two');
      findFinalPosition('slot-three');
    }
  });

});