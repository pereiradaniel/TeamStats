const team = {
  // PLAYERS
  _players: [
    {
      firstName: "Wayne",
      lastName: "Gretzky",
      age: 32
    },
    {
      firstName: "Bobby",
      lastName: "Orr",
      age: 45
    },
    {
      firstName: "Maurice",
      lastName: "Richard",
      age: 60
    }
  ],
  
  // GAMES
  _games: [
    {
      opponent: 'Blackhawks',
      teamPoints: 6,
      opponentPoints: 3
    },
    {
      opponent: 'Rangers',
      teamPoints: 7,
      opponentPoints: 2
    },
    {
      opponent: 'Red Wings',
      teamPoints: 5,
      opponentPoints: 1
    }
  ],
  
  get games() {
    return this._games;
  },
  
  get players() {
    return this._players;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    this.players.push(player);
  },
  
  addGame(opponent, ourPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      points: ourPoints,
      opponentPoitns: opponentPoints
    };
    this.games.push(game);
  }
};

team.addGame('Canucks', 7, 0);
team.addGame('Jets', 8, 6);
team.addGame('Nordiques', 5, 3);

console.log(team.players);
console.log(team.games);