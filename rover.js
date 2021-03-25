class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'Normal';
    this.generatorWatts = 110

  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: []
    }
    for (let i = 0; i < Message.commands.length; i++) {
      if (Message.commands[i] === 'STATUS_CHECK') {
        results.push({ completed: true, roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 87382098 } })
      }
    }
    return response
  }
}
module.exports = Rover;