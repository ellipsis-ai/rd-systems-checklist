function(channel, ellipsis) {
  const intro = `
:female-scientist: Hello, this is the R & D Systems Checklist reminder. 

Anyone in this channel can respond. Start by selecting a room below.
`;

ellipsis.success(intro, {
  choices: [1, 2, 3].map(choiceFor)
});

function choiceFor(roomNumber) {
  return {
    label: `Room ${roomNumber}`,
    actionName: `run-room-${roomNumber}-checklist`,
    args: [
      { name: "postChannel", value: channel }
    ],
    allowOthers: true,
    allowMultipleSelections: true
  };
}
}
