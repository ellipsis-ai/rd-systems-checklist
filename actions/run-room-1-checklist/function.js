function(emitters, quickConnects, growLightsOn, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Grow lights on (OFF 12am-6am)": growLightsOn
}
support.postFor("R & D room 1", questionsAndAnswers, channels);
}
