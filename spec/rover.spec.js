const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

it("constructor sets position and default values for mode and generatorWatts", function(){
  let rover = new Rover(1200);
  expect(rover.position).toEqual(1200);
  expect(rover.generatorWatts).toEqual(110);
})

it("response returned by receiveMessage contains name of message", function(){
  let message = new Message("Test message", []);
  let rover = new Rover(1200);
  expect(rover.receiveMessage(message).message).toEqual(message.name);
})

it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let commands = [new Command('MOVE'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(1150);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(message.commands.length);
})

it("responds correctly to status check command", function(){
  let command = [new Command('STATUS_CHECK')];
  let message = new Message('New Message', command);
  let rover = new Rover(1200);
  let response = rover.receiveMessage(message);
  expect(response.results).toEqual(response.results);
})

it("responds correctly to mode change command", function(){
  let command = [new Command('NORMAL')]
  let message = new Message('Mode Change message', command);
  let rover = new Rover(1200);
  let response = rover.receiveMessage(message);
  expect(rover.receiveMessage.results).toBeTrue;
  expect(rover.mode).toEqual('NORMAL');
})

it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
  let rover = new Rover(210);
  rover.mode = 'LOW_POWER';
  let message = new Message('Once again, another test message', [new Command('MOVE', 234)]);
  let response = rover.receiveMessage(message);
  expect(rover.position).toEqual(210)
  expect(rover.mode).toEqual('LOW_POWER');
})

it("responds with position for move command", function(){
  let rover = new Rover(250);
  let command = [new Command('MOVE', 600)]
  let message = new Message('Last test message', command) 
  rover.receiveMessage(message);
  expect(rover.position).toEqual(600);
})

});

