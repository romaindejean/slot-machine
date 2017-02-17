$(document).ready(() => {
  
  let finalPositionOne = '';
  let finalPositionTwo = '';
  let finalPositionThree = '';

  const reInitializeState = () => {
    finalPositionOne = '';
    finalPositionTwo = '';
    finalPositionThree = '';
    //Hidding result message
    $('.no-caffeine').addClass('hidden');
    $('.caffeine').addClass('hidden');
    //Removing stopping class for each reel
    $('#slot-one').removeClass('slot-one-stopping-1 slot-one-stopping-2 slot-one-stopping-3');
    $('#slot-two').removeClass('slot-two-stopping-1 slot-two-stopping-2 slot-two-stopping-3');
    $('#slot-three').removeClass('slot-three-stopping-1 slot-three-stopping-2 slot-three-stopping-3');
    //Removing reels border style
    $('.slots-wrapper').removeClass('slots-wrapper-border-win slots-wrapper-border-loose');
  }

  const assignFinalPosition = slotNumber => {
    let finalSlotPosition = Math.ceil(Math.random()*3);
    $('#' + slotNumber).removeClass(slotNumber + '-running').addClass(slotNumber + '-stopping-' + finalSlotPosition);
    return finalSlotPosition;
  }

  const assignBeverage = position => {
    if (position === 1) {
      $('.caffeine').html('Yay caffeine! Enjoy your coffee...')
    } else if (position === 2) {
      $('.caffeine').html('Yay caffeine! Enjoy your tea...')
    } else {
      $('.caffeine').html('Yay caffeine! Enjoy your expresso...')
    }
  }

  const verifyWin = (positionOne, positionTwo, positionThree) => {
    //The user gets his caffeine only is the three reels have a matching position
    if (positionOne === positionTwo && positionOne === positionThree) {
      assignBeverage(positionOne);
      //Adding a delay to synchronize with the slow down animation
      setTimeout(function() {
        $('.caffeine').removeClass('hidden');
        $('.slots-wrapper').addClass('slots-wrapper-border-win');
      }, 1000)
    } else {
       //Adding a delay to synchronize with the slow down animation
      setTimeout(function() {
        $('.no-caffeine').removeClass('hidden');
        $('.slots-wrapper').addClass('slots-wrapper-border-loose');
      }, 1000)
    }
  }

// this solution provide an automatic stop of the spinning
    $('#get-caffeine').on('click', function() {
      reInitializeState();

      //Disabling spinning button 
      $(this).prop("disabled", true);
      $(this).addClass('button-get-caffeine-disabled');

      //Starting reels spinning
      $('#slot-one').addClass('slot-one-running');
      $('#slot-two').addClass('slot-two-running');
      $('#slot-three').addClass('slot-three-running');

      //Stopping reels spinning after 1sec
      setTimeout(() => {
        finalPositionOne = assignFinalPosition('slot-one');
        finalPositionTwo = assignFinalPosition('slot-two');
        finalPositionThree = assignFinalPosition('slot-three');
        verifyWin(finalPositionOne, finalPositionTwo, finalPositionThree);
      }, 1000);

      //1sec for the running time + 1sec for the slow down animation time
      setTimeout(() => {
        $(this).removeClass('button-get-caffeine-disabled');
        $(this).prop("disabled", false);
      }, 2000);
      
  });

});