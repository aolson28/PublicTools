const incrementBaseThirtySix = (numString) => {
  if (/^[A-Z0-9]+$/i.test(numString)) {
      return (parseInt(numString, 36) + 1).toString(36);
  } else {
    return JSON.stringify({error: "Not a valid base 36 number"});
  }
};
