$(document).ready(function() {

  function findFinalPosition(slotPosition) {
    let finalPositionSlot = Math.ceil(Math.random()*3);
    $('#' + slotPosition).removeClass(slotPosition + '-running').addClass(slotPosition + '-stopping-' + finalPositionSlot);
  }

  $('#get-caffeine').on('click', function() {
    if (!$('#slot-1').hasClass('slot-1-running')) {
      $('#slot-1').removeClass('slot-1-stopping-1 slot-1-stopping-2 slot-1-stopping-3').addClass('slot-1-running');
      $('#slot-2').removeClass('slot-2-stopping-1 slot-2-stopping-2 slot-2-stopping-3').addClass('slot-2-running');
      $('#slot-3').removeClass('slot-3-stopping-1 slot-3-stopping-2 slot-3-stopping-3').addClass('slot-3-running');
    } else {
      findFinalPosition('slot-1');
      findFinalPosition('slot-2');
      findFinalPosition('slot-3');
    }
  });

});