function(nutrientTubs, chillers, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Both nutrient tubs at least 1/2 full": nutrientTubs,
  "Both chillers running between 70-90 degrees F": chillers
}
support.postFor("R & D room 2", questionsAndAnswers, channels);
}
