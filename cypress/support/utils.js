export {
    uniqueStringCode,
    generateRandomNum,
    randomeAlphaCode
};



function uniqueStringCode(alphaLength) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < alphaLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = `${result + Date.now()}`;
    return result;
  }
  
  function generateRandomNum(length) {
    const add = 1;
    let max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
    if (length > max) {
      return generateRandomNum(max) + generateRandomNum(length - max);
    }
    max = Math.pow(10, length + add);
    const min = max / 10; // Math.pow(10, n) basically
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return ('' + number).substring(add);
  }
  
  
  function randomeAlphaCode(strLength) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < strLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  




















