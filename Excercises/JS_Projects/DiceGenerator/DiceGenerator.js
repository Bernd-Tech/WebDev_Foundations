const rollTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
}

const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    rollTracker[roll]++;
    console.log(`You have rolled a ${roll}`)
}

for (let i = 0; i < 10; i++) {
    rollDice()
}

const rollTrackerDisplay = () =>  {
console.log("Dice Roll Score Tracker:")
for (const key in rollTracker) {
    console.log(`${key}: ${rollTracker[key]} times`)
}
}

rollTrackerDisplay()