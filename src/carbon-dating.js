const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || !sampleActivity) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity)

  if(!sampleActivity || sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  }
  
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

  return t;
};
