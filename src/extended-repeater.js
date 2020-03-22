module.exports = function repeater(str, options) {
    const repeatTimes = options.repeatTimes || 1;
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    let repeatedAddition = typeof options.addition === "undefined" ? "" : String(options.addition);
    const additionSeparator = String(options.additionSeparator) || "|";

    if(additionRepeatTimes > 1) {
        repeatedAddition = (repeatedAddition + additionSeparator).repeat(additionRepeatTimes - 1) + repeatedAddition;
    }
    const joined = str + repeatedAddition;

    if(repeatTimes === 1) {
        return joined;
    } 
    const separator = options.separator || "+";
    console.log(String(options.addition));
    console.log(String(options.additionSeparator) || "|");
    console.log(repeatedAddition);
    const repeatedJoined = (joined + separator).repeat(repeatTimes - 1) + joined;
    
    return repeatedJoined;
};
  