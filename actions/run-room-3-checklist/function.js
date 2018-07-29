function(emitters, quickConnects, growLightsOn, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Grow lights on (OFF 10am-4pm)": growLightsOn
}
support.postFor("R & D room 3", questionsAndAnswers, channels);
}
