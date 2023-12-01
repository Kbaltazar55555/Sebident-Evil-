# Sebident-Evil
# Initialize player
player = createPlayer()

# Display introduction
display("You have once again entered the world of survival.")

# Set the maximum number of Lives
maxLives = 3

# Initialize the Lives counter
remainingLives = maxLives

# Store last scenario location
lastScenarioLocation = None

# Main game loop
while not player.isGameOver() and remainingLives > 0:
    # Display current location and prompt for user input
    currentLocation = player.getCurrentLocation()
    display(currentLocation.getDescription())
    display("Choices:")
    display(currentLocation.getChoices())

    # Retrieve user input
    userInput = getUserInput()

    # Process user input
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

# Display game over or ending message
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

# Return to title screen
display("Returning to title screen.")
