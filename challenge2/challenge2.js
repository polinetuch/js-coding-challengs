var avgScoreJohnTeam = (89 + 120 + 103) / 3;
console.log("John's team averge score is:" + " " + avgScoreJohnTeam);

var avgScoreMikeTeam = (116 + 94 + 123) / 3;
console.log("Mike's team averge score is:" + " " + avgScoreMikeTeam);

var avgScoreMaryTeam = (97 + 134 + 105) / 3;
console.log("Mary's team average score is:" + " " + avgScoreMaryTeam);

if (avgScoreMikeTeam > avgScoreJohnTeam && avgScoreJohnTeam > avgScoreMaryTeam) {
    console.log('John\'s team won the game' + avgScoreJohnTeam);
} else if (avgScoreMikeTeam > avgScoreJohnTeam && avgScoreMikeTeam > avgScoreMaryTeam) {
    console.log('Mike\'s team won the game' + avgScoreMikeTeam);
} else if (avgScoreMaryTeam > avgScoreJohnTeam && avgScoreMaryTeam > avgScoreMikeTeam) {
    console.log('Mary\'s team won the game' + avgScoreMaryTeam);
} else {
    console.log('It\'s a tie')
}