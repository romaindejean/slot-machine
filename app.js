$(document).ready(() => {
  
  let finalPositionReelOne = '';
  let finalPositionReelTwo = '';
  let finalPositionReelThree = '';
  const resultMessage = $('.result-message');

  const reInitializeState = () => {
    finalPositionReelOne = '';
    finalPositionReelTwo = '';
    finalPositionReelThree = '';
    // Hidding result message
    resultMessage.addClass('hidden')
    // Removing stopping class for each reel
    $('#reel-one').removeClass('reel-one-stopping-1 reel-one-stopping-2 reel-one-stopping-3');
    $('#reel-two').removeClass('reel-two-stopping-1 reel-two-stopping-2 reel-two-stopping-3');
    $('#reel-three').removeClass('reel-three-stopping-1 reel-three-stopping-2 reel-three-stopping-3');
    // Removing reels border style
    $('.reels-wrapper').removeClass('reels-wrapper-border-win reels-wrapper-border-loose');
  }

  const assignFinalPosition = reelNumber => {
    let finalReelPosition = Math.ceil(Math.random()*3);
    $('#' + reelNumber).removeClass(reelNumber + '-running').addClass(reelNumber + '-stopping-' + finalReelPosition);
    return finalReelPosition;
  }

  const assignBeverage = position => {
    const beverage = 
    position === 1 ? 'coffee' :
    position === 2 ? 'tea' :
    position === 3 ? 'expresso' : null;
    // caffeineMessage.html(`Yay caffeine! Enjoy your ${beverage}...`);
    resultMessage.html(`Yay caffeine! Enjoy your ${beverage}...`);
  }

  const verifyWin = (positionOne, positionTwo, positionThree) => {
    // The user gets his caffeine only is the three reels have a matching position
    if (positionOne === positionTwo && positionOne === positionThree) {
      assignBeverage(positionOne);
      // Adding a delay to synchronize with the slow down animation
      setTimeout(() => {
        resultMessage.removeClass('hidden')
        resultMessage.addClass('caffeine')
        $('.reels-wrapper').addClass('reels-wrapper-border-win');
      }, 1000)
    } else {
       // Adding a delay to synchronize with the slow down animation
      setTimeout(() => {
        resultMessage.removeClass('hidden')
        resultMessage.addClass('no-caffeine')
        resultMessage.html('Sorry no caffeine for you today!');
        $('.reels-wrapper').addClass('reels-wrapper-border-loose');
      }, 1000)
    }
  }

    $('#get-caffeine').on('click', () => {
      reInitializeState();
      const button = $('#get-caffeine');

      // Disabling spinning button 
      button.prop("disabled", true);
      button.addClass('button-get-caffeine-disabled');

      // Starting reels spinning
      $('#reel-one').addClass('reel-one-running');
      $('#reel-two').addClass('reel-two-running');
      $('#reel-three').addClass('reel-three-running');

      // Stopping reels spinning after 1sec
      setTimeout(() => {
        finalPositionReelOne = assignFinalPosition('reel-one');
        finalPositionReelTwo = assignFinalPosition('reel-two');
        finalPositionReelThree = assignFinalPosition('reel-three');
        verifyWin(finalPositionReelOne, finalPositionReelTwo, finalPositionReelThree);
      }, 1000);

      // 1sec for the running time + 1sec for the slow down animation time
      setTimeout(() => {
        button.removeClass('button-get-caffeine-disabled');
        button.prop("disabled", false);
      }, 2000);
      
  });

});