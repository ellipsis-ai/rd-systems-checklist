function(nutrientTubs, chillers, postChannel, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Nutrient tubs at least 1/2 full": nutrientTubs,
  "Chillers running between 70-90 degrees F": chillers
}
support.postFor("R & D room 2", questionsAndAnswers, [postChannel]);
}
