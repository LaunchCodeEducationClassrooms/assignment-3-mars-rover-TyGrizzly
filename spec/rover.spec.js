const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  //7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover();
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('Normal');
    expect(rover.generatorWatts).toEqual(110)
  });
  //8
  it("response returned by receiveMessage contains name of message", function() {
    let message = new Message("name of message")
    let rover = new Rover(98382)
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual(message.name);
  });
  //9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message, commands);
    expect(response.message).toEqual(message.name)
  });
  //10
  it("responds correctly to status check command", function() {
    let rover = new Rover(12345);
    let command1 = new Command("STATUS_CHECK");
    let message = new Message("Test Message", [command1]);
    let response = rover.receiveMessage(message);
    
  });
  //11
  it("responds correctly to mode change command", function() { });
  //12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() { });
  //13
  it("responds with position for move command", function() { });

});