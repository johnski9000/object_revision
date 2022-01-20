const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Diego',
        lastName: 'Sanchezo',
        age: 12
      },
      {
        firstName: 'Pico',
        lastName: 'Sancheaz',
        age: 13
      }
    ],
    get players() {
      return this._players
    },
    addPlayer (name, surname, age) {
      const player = {
        firstName: name,
        lastName: surname,
        age: age
      };
      return this._players.push(player)
    },
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
    ],
    get games() {
      return this._games
    },
    addGame (name, teamPoints, points) {
      const game = {
        opponent: name,
        teamPoints: teamPoints,
        opponentPoints: points
      };
      return this._games.push(game)
    }
  }
  team.addPlayer("John", "Wozniak", 26)
  team.addPlayer("Tom", "Wood", 26)
  team.addPlayer("Sascha", "Woods", 26)
  console.log(team.players)
  team.addGame("something1", 12341, 123515)
  team.addGame("something2", 12341, 123515)
  team.addGame("something3", 12341, 123515)
  console.log(team.games)