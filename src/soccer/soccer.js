/*
A soccer match took place between 2 teams. You are given the list of goals scored in a table of numbers: each number represents a goal of one of the teams:
- 1 for a team 1 goal
- 2 for a team 2 goal

Create a function `getScore` which returns the string of the current scores and the winning team.
Example:
* points: [1, 1, 1], result: "3-0: team 1 wins the game"
* points: [2, 1, 2, 2], result: "1-3: team 2 wins the game"
* points: [1, 2, 1, 2], result: "2-2: draw"
* points: [], result: "0-0: draw"

If the argument is null, return "Illegal argument".

If a value of the argument is not 1 or 2, return "Illegal argument".
*/
// TODO add your code here
function getScore(goals) {
  if (goals === null) {
    return "Illegal argument"
  }

  if (goals.some((goal) => goal !== 1 && goal !== 2)) {
    return "Illegal argument"
  }

  const team1 = goals.filter((goal) => goal === 1).length
  const team2 = goals.filter((goal) => goal === 2).length

  if (team1 > team2) {
    return `${team1}-${team2} : team 1 wins the game`
  } else if (team1 < team2) {
    return `${team1}-${team2} : team 2 wins the game`
  } else {
    return `${team1}-${team2} : draw`
  }
}

module.exports = getScore
