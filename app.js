$(document).ready(() => {
  
  let finalPositionOne = '';
  let finalPositionTwo = '';
  let finalPositionThree = '';

  const reInitializeState = () => {
    finalPositionOne = '';
    finalPositionTwo = '';
    finalPositionThree = '';
    $('.no-caffeine').addClass('hidden');
    $('.caffeine').addClass('hidden');
    $('#slot-one').removeClass('slot-one-stopping-1 slot-one-stopping-2 slot-one-stopping-3');
    $('#slot-two').removeClass('slot-two-stopping-1 slot-two-stopping-2 slot-two-stopping-3');
    $('#slot-three').removeClass('slot-three-stopping-1 slot-three-stopping-2 slot-three-stopping-3');
    $('.slots-wrapper').removeClass('slots-wrapper-border-win slots-wrapper-border-loose');
  }

  const findFinalPosition = slotNumber => {
    let finalSlotPosition = Math.ceil(Math.random()*3);
    $('#' + slotNumber).removeClass(slotNumber + '-running').addClass(slotNumber + '-stopping-' + finalSlotPosition);
    return finalSlotPosition;
  }

  const selectBeverage = position => {
    if (position === 1) {
      $('.caffeine').html('Yay caffeine! Enjoy your coffee...')
    } else if (position === 2) {
      $('.caffeine').html('Yay caffeine! Enjoy your tea...')
    } else {
      $('.caffeine').html('Yay caffeine! Enjoy your expresso...')
    }
  }

  const verifyWin = (positionOne, positionTwo, positionThree) => {
    if (positionOne === positionTwo && positionOne === positionThree) {
      selectBeverage(positionOne);
      setTimeout(function() {
        $('.caffeine').removeClass('hidden');
        $('.slots-wrapper').addClass('slots-wrapper-border-win');
      }, 1000)
    } else {
      setTimeout(function() {
        $('.no-caffeine').removeClass('hidden');
        $('.slots-wrapper').addClass('slots-wrapper-border-loose');
      }, 1000)
    }
  }

// this solution provide a manual stop of the spinning
  // $('#get-caffeine').on('click', () => {
  //   if (!$('#slot-one').hasClass('slot-one-running')) {
  //     reInitializeState();
  //     $('#slot-one').addClass('slot-one-running');
  //     $('#slot-two').addClass('slot-two-running');
  //     $('#slot-three').addClass('slot-three-running');
  //     $('#get-caffeine').html('Stop spinning');
  //   } else {
  //     finalPositionOne = findFinalPosition('slot-one');
  //     finalPositionTwo = findFinalPosition('slot-two');
  //     finalPositionThree = findFinalPosition('slot-three');
  //     verifyWin(finalPositionOne, finalPositionTwo, finalPositionThree);
  //     $('#get-caffeine').html('Get Caffeine');
  //   }
  // });

// this solution provide an automatic stop of the spinning
    $('#get-caffeine').on('click', function() {
      reInitializeState();
      $(this).prop("disabled", true);
      $(this).addClass('button-get-caffeine-disabled');
      $('#slot-one').addClass('slot-one-running');
      $('#slot-two').addClass('slot-two-running');
      $('#slot-three').addClass('slot-three-running');
      setTimeout(() => {
        finalPositionOne = findFinalPosition('slot-one');
        finalPositionTwo = findFinalPosition('slot-two');
        finalPositionThree = findFinalPosition('slot-three');
        verifyWin(finalPositionOne, finalPositionTwo, finalPositionThree);
      }, 1000);
      //1sec for the running time + 1sec for the slow down animation time
      setTimeout(() => {
        $(this).removeClass('button-get-caffeine-disabled');
        $(this).prop("disabled", false);
      }, 2000);
      
  });

});