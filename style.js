//# Sebident-Evil

//# Initialize player
//player = startGame


var storyline = {
    Act1: {
        title: "Car Crash Escape", 
        question: "You open your eyes with a pounding headache. Looks like you've just been in a car accident. Dizzy, but still moving. The car is completely wrecked...",
        options: [
            { choice: "Wait and hide in a nearby alley.", 
              result: "A horde of zombies attack you! You died!" },
            { choice: "Can't waste time, go into the back of your vehicle to get your weapons.", 
              result: "The fire is too intense, as you're backing away, more zombies emerge from nearby cars to ambush you! You died!" },
            { choice: "Move down the street, away from the fire.", 
              result: "You see piles of bloody bodies, but...they're moving!!! You have to run away!" }
        ]
    }
};


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#startGame');
    console.log(button);

    var startPage = document.querySelector('#startPage');
    button.addEventListener('click', function() {
        console.log('You have once again entered the world of horror');

        startPage.innerHTML = `
        <h1>${storyline.Act1.title}</h1>
        <p>${storyline.Act1.question}</p>
        <div>
            <label for="choice1.1">${storyline.Act1.options[0].choice}</label>
            <input id="choice1.1" type="radio" name="choices">
        </div>
        <div>
            <label for="choice1.2">${storyline.Act1.options[1].choice}</label>
            <input id="choice1.2" type="radio" name="choices">
        </div>
        <div>
            <label for="choice1.3">${storyline.Act1.options[2].choice}</label>
            <input id="choice1.3" type="radio" name="choices">
        </div>
        <button>Confirm</button>
        `;
    });
});

var button = document.querySelector("#confirm");
button.addEventListener('click', function() {
    console.log('Next Act');
})

function getChoiceSelection() {
    var choices = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            console.log(choices[i].value);
        }
    }
}




//# Set the maximum number of Lives
maxLives = 3

//# Initialize the Lives counter
remainingLives = maxLives

//# Store last scenario location
lastScenarioLocation = None

//# Main game loop
/*while not player.isGameOver() and remainingLives > 0:
    # Display current location and prompt for user input
    currentLocation = player.getCurrentLocation()
    display(currentLocation.getDescription())
    display("Choices:")
    display(currentLocation.getChoices())

    //# Retrieve user input
    userInput = getUserInput()

    //# Process user input
    if userInput.lower() == "die":
        player.setGameOver(True)
    else:
        # Update scenario location based on user input
        lastScenarioLocation = currentLocation
        currentLocation.updateLocation(userInput)

        # Check if player lost a life
        if currentLocation.isDangerous():
            remainingLives -= 1
            display("You lost a life! Remaining lives: " + str(remainingLives))

//# Display game over or ending message
if remainingLives == 0:
    display("You ran out of lives. Game over.")
else:
    # Check if player completed all scenarios
    if player.hasCompletedAllScenarios():
        # Display secret ending message
        display("Congratulations! You successfully completed all scenarios and unlocked the Police Station ending.")
    else:
        # Display generic game over message
        display("You died. Game over.")

//# Return to title screen
display("Returning to title screen.")*/