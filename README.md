# Sebident-Evil-
Unit 1 Project For GASEB

# Sebident-Evil
# Initialize player
player = createPlayer()

# Display introduction
display"You have Once Again entered...the world of survival"

# Set the maximum number of Lives                          -Player will have 3 chances throughout the adventure.  
maxLives = 3                                               -Player will die at the end of those lives, and return to main screen

# Initialize the Lives counter
remainingLives = maxLives

# Store last scenarioLocation                              -Where player was when making incorrect choice   

# Main game loop
while !player.isGameOver():                                -game loop continues until player dies during the game
    # Display current location and prompt for user input
    display(player.getCurrentLocation().getDescription())  -Understand where player is (in which scenario(4)
    display("Choices:")                                    -Understand choices available to player in the in scenario(4)
    display(player.getCurrentLocation().getChoices())      -Shows choices to player in the Scenario(4)

    # retrieves user input                                 -Player makes 1/3 choices in sub scenarios
    userInput = getUserInput()

    # Game Processes user input                            -Player has 3 maxLives during the time of playthrough.  
    if userInput == "Dies":
        player.setGameOver(true)
    else:
        # Update scenario location based on user input     -if PlayerLives is < maxLives(3), then return to last scenarioLocation        
         scenario.updateLocation(userInput)

# Display game over message                                -if Maxlives === 0, display game message.  Return to title screen
display("You died. Game over.")

# Display game ending message                              -If player completes all 4 scenarios && MaxLives > 0, then display game ending.  Return to title screen with (secret character - stretch goal
display(Police Station ending)
