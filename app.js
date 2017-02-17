$(document).ready(function() {
  
  let finalPositionOne = '';
  let finalPositionTwo = '';
  let finalPositionThree = '';
  let hasWon = '';

  function findFinalPosition(slotNumber) {
    let finalSlotPosition = Math.ceil(Math.random()*3);
    $('#' + slotNumber).removeClass(slotNumber + '-running').addClass(slotNumber + '-stopping-' + finalSlotPosition);
    return finalSlotPosition;
  }

  function verifyWin(positionOne, positionTwo, positionThree) {
    if (positionOne === positionTwo && positionOne === positionThree) {
      hasWon = true;
      $('.caffeine').removeClass('hidden');
    } else {
      hasWon = false;
      $('.no-caffeine').removeClass('hidden');
    }
  }

  $('#get-caffeine').on('click', function() {
    if (!$('#slot-one').hasClass('slot-one-running')) {
      hasWon = '';
      $('.no-caffeine').addClass('hidden');
      $('.caffeine').addClass('hidden');
      $('#slot-one').removeClass('slot-one-stopping-1 slot-one-stopping-2 slot-one-stopping-3').addClass('slot-one-running');
      $('#slot-two').removeClass('slot-two-stopping-1 slot-two-stopping-2 slot-two-stopping-3').addClass('slot-two-running');
      $('#slot-three').removeClass('slot-three-stopping-1 slot-three-stopping-2 slot-three-stopping-3').addClass('slot-three-running');
    } else {
      finalPositionOne = findFinalPosition('slot-one');
      finalPositionTwo = findFinalPosition('slot-two');
      finalPositionThree = findFinalPosition('slot-three');
      verifyWin(finalPositionOne, finalPositionTwo, finalPositionThree);
    }
  });

});