//# Sebident-Evil

//# Initialize player
//player = startGame


var storyline = {
    currentAct: "Act1",
    Act1: {
        title: "Car Crash Escape",
        question: "You open your eyes with a pounding headache. Looks like you've just been in a car accident. Dizzy, but still moving. The car is completely wrecked...",
        options: [
            { option: "Wait and hide in a nearby alley", 
              result: "A horde of zombies attack you! You died!" },
            { option: "Can't waste time, go into the back of your vehicle to get your weapons", 
              result: "The fire is too intense, as you're backing away, more zombies emerge from nearby cars to ambush you! You died!" },
            { option: "Move down the street, away from the fire", 
              result: "You see piles of bloody bodies, but...they're moving!!! You have to run away!" }
        ]
    },
    "A horde of zombies attack you! You died!": {
        title: "A horde of zombies attack you! You died!",
        story: "A horde of zombies attack you! You died!" ,
        result: "Back to Main Screen"
    },
    "The fire is too intense, as you're backing away, more zombies emerge from nearby cars to ambush you! You died!": {
        title: "The fire is too intense, as you're backing away, more zombies emerge from nearby cars to ambush you! You died!",
        story: "The fire is too intense, as you're backing away, more zombies emerge from nearby cars to ambush you! You died!" ,
        result: "Back to Main Screen" 
    },
    "You see piles of bloody bodies, but...they're moving!!! You have to run away!": {
        title: "You see piles of bloody bodies, but...they're moving!!! You have to run away!",
        story: "You see piles of bloody bodies, but...they're moving!!! You have to run away!",
        result: "Text here"
    }
};
    

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#startGame');
    console.log(button);
    var startPage = document.querySelector('#startPage');
    button.addEventListener('click', function() {
        console.log('You have once again entered the world of horror');

        renderAct();
    });
});

function getChoices() {
    for(var i = 0; i < 3; i++) {
        console.log(i)
    }
}

function renderAct() {
    startPage.innerHTML = `
            <h1>${storyline[storyline.currentAct].title}</h1>
            <p>${storyline[storyline.currentAct].question}</p>
            ${getOptions(storyline.currentAct)}
            <button id="confirm" oneclick="logSelectedOptionDestination()">Confirm</button>`;
}


function logSelectedOptionDestination() {
    var options = document.querySelectorAll('input[type="radio"]');
    
    if (options && options.length > 0) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var result = options[i].getAttribute('result');
                if (result) {
                    storyline.currentAct = result;
                    renderAct();
                }
            }
        }
    } else {
        console.error("No radio options found.");
    }
}


function getOptions(currentAct) {
    var options1 = '';
    for (var i = 0; i < storyline[currentAct].options.length; i++) {
        options1 += `
        <div>
            <label for="choice${i + 1}">${storyline[currentAct].options[i].option}</label>
            <input result="${storyline[currentAct].options[i].result}" id="choice${i + 1}" type="radio" name="choices">
        </div>`;
        //console.log(storyline[currentAct].options[i].option);
    }
    return options1;
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