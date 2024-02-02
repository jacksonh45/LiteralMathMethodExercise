let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs);
console.log(warmHugs.toUpperCase)
warmHugs = warmHugs.replace ("like", "love")
console.log(warmHugs)
var beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled.slice (18));
var dotDotDot = ". . ."
var skullBones = `I dont have a skull ${dotDotDot} or bones.`
console.log(skullBones)
console.log(Math.PI);
var randomNumber = Math.random() *3 +1
randomNumber = Math.floor (randomNumber)
console.log(randomNumber);

//BONUS
console.log(" Let It Go!".toUpperCase().repeat(2).trim());
let reindeers = "Reindeers are better than people"
console.log(reindeers.replaceAll(" ", "_"));
console.log(Math.SQRT2);
// var newRandomNumber = Math.floor(Math.random() * 17) +7
let newRandomNumber = Math.random()
newRandomNumber *= 17
newRandomNumber += 7
newRandomNumber = Math.floor(newRandomNumber)
console.log(newRandomNumber);
