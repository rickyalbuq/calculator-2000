function turnSegmentOn(segment) {
  $(segment).toggleClass("on");
}

function cleanSegment(digit) {
  digit.find(".segment-1").removeClass("on");
  digit.find(".segment-2").removeClass("on");
  digit.find(".segment-3").removeClass("on");
  digit.find(".segment-4").removeClass("on");
  digit.find(".segment-5").removeClass("on");
  digit.find(".segment-6").removeClass("on");
  digit.find(".segment-7").removeClass("on");
}

function drawNumber(digit, number) {
  cleanSegment(digit);

  switch (number) {
    case 0:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-5"));
      turnSegmentOn(digit.find(".segment-6"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 1:
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      break;
    case 2:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-5"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 3:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 4:
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-6"));
      break;
    case 5:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-6"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 6:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-5"));
      turnSegmentOn(digit.find(".segment-6"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 7:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      break;
    case 8:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-5"));
      turnSegmentOn(digit.find(".segment-6"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    case 9:
      turnSegmentOn(digit.find(".segment-1"));
      turnSegmentOn(digit.find(".segment-2"));
      turnSegmentOn(digit.find(".segment-3"));
      turnSegmentOn(digit.find(".segment-4"));
      turnSegmentOn(digit.find(".segment-6"));
      turnSegmentOn(digit.find(".segment-7"));
      break;
    default:
      turnSegmentOn(digit.find(".segment-4"));
  }
}

function cleanDisplay() {
  for(i = 8; i > 0; i--) {
    cleanSegment($(`#digit-${i}`));
    
    if(i === 1) {
      drawNumber($(`#digit-${i}`), 0);
    }
  }
}

function displayNumbers(value) {
  let length = value.length;

  if(length <= 8) {
    for(i=length; i >= 0; i--) {
      const j = length - i;
      drawNumber($(`#digit-${j}`), Number(value[i]));
    }
  } else {
    cleanDisplay();
    drawNumber($('#digit-1'), '');
  }
}