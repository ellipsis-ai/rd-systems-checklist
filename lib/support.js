/*
@exportId ZSHazAqiQDWRVghBi1d7GQ
*/
module.exports = (function() {
const EllipsisApi = require('ellipsis-api');


return ellipsis => {
  const api = new EllipsisApi(ellipsis);
  const thisChannel = ellipsis.userInfo.messageInfo.channel;
  const user = ellipsis.userInfo.messageInfo.userId;
  
  return {
    postFor: postFor,
    startFor: startFor
  };
  
  function startFor(checklistName, actionName, postChannel) {
    ellipsis.success(introFor(checklistName), {
      choices: [{
        label: "Start",
        actionName: actionName,
        args: [{ name: "postChannel", value: postChannel }],
        allowOthers: true
      }]
    });
  }
  
  function introFor(checklistName) {
    return `
:female-scientist: Hello, this is the Systems Checklist reminder for ${checklistName}. 

Anyone in this channel can answer the following yes/no questions. Click below to begin.
`;
  }
  
  function postFor(checklistName, questionsAndAnswers, postChannels) {
    const summary = summaryFor(checklistName, questionsAndAnswers);
    return postSummaryToAll(summary, postChannels);
  }
  
  function summaryFor(checklistName, questionsAndAnswers) {
    return `
${checklistName} checklist for channel <#${thisChannel}> has been completed by <@${user}>:
${summaryPartsFor(questionsAndAnswers)}
`;
  }
  
  function summaryPartsFor(questionsAndAnswers) {
    return Object.keys(questionsAndAnswers).map(question => {
      return summaryPartFor(question, questionsAndAnswers[question]);
    }).join("\n");
  }
  
  function summaryPartFor(question, answer) {
    return `${checkFor(answer)}   ${question}`;
  }
  
  function postSummaryToAll(summary, postChannels) {
    const channels = postChannels;//.filter(ea => ea != thisChannel);
    console.log(JSON.stringify(channels));
    return api.say({ message: summary }).then(res => {
      Promise.all(channels.map(ch => {
        return postSummary(summary, ch);
      })).then(ellipsis.noResponse);                                 
    });
  }
  
  function postSummary(summary, channel) {
    return api.run({
      actionName: "post-checklist-summary",
      args: [{ name: "summary", value: summary }],
      channel: channel
    });
  }

  function checkFor(bool) {
    return bool? ":white_check_mark:" : ":x:";
  }
  
};
})()
     