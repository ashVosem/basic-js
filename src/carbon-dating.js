const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(date) {
  return typeof date !== "string" || +date <= 0 || +date > 15 || isNaN(parseFloat(date))
         ? false
         : Math.ceil((Math.log(MODERN_ACTIVITY/(parseFloat(date)))/0.693*HALF_LIFE_PERIOD))
 };

 