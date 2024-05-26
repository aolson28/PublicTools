const incrementBaseThirtySix = (numString) => {
  if (/^[A-Z0-9]+$/i.test(numString)) {
      return (parseInt(numString, 36) + 1).toString(36);
  } else {
    return JSON.stringify({error: "Not a valid base 36 number"});
  }
};

const convertRGBToHex = (r, g, b) => {
    return [r,g,b].map((num) => {
      if (num <= 0) {
        return '00'
      } else if (num < 16) {
        return '0' + num.toString(16);
      } else if (num > 255) {
        return 'FF'
      } else {
        return num.toString(16);
      }
    }
  ).join('').toUpperCase();
};