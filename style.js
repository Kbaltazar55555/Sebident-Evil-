const questionElement = document.getElementById('Question');
const optionElement = document.getElementById('Options');

let state = {};

function startGame() {
  state = {};
  showQuestionNode(1);
}

function showQuestionNode(questionNodeIndex) {
  const questionNode = questionNodes.find(node => node.id === questionNodeIndex);
  questionElement.innerText = questionNode.question;
  while (optionElement.firstChild) {
    optionElement.removeChild(optionElement.firstChild);
  }

  questionNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.option;
      button.classList.add('button');
      button.addEventListener('click', () => selectOption(option));
      optionElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null;
}

function selectOption(option) {
  const nextquestionNodeId = option.nextOption;
  state = Object.assign(state, option.nextOption); // Change this line
  if (nextquestionNodeId == 'Restart' || nextquestionNodeId == 'Try again') {
    return startGame();
  }
  showQuestionNode(nextquestionNodeId);
}

const questionNodes = [
    {
        id: 0,
        question: "Welcome to the world of Horror!",
        options: [
          {
            option: "Start Game",
            nextOption: 1
          },
        ]
      },
  {
    id: 1,
    question: "You emerge from your car, dizzy, but unscathed. The car won't start...",
    options: [
      {
        option: "Wait and hide in a nearby alley",
        nextOption: 3
      },
      {
        option: "Can't waste time, go into the back of your vehicle to get your weapons.",
        nextOption: 3
      },
      {
        option: "Move down the street, away from the fire.",
        nextOption: 2
      }
    ]
  },
  {
    id: 2,
    question: "I'm out of breath. Why is this happening? I'm pushing these people off, but they keep coming for me! I'll take shelter at the local gun shop!",
    options: [
      {
        option: "Burst through the front door with your foot.",
        nextOption: 5
      },
      {
        option: "Get through the door quietly, locking the deadbolt from inside.",
        nextOption: 5
      },
      {
        option: "Slowly turn the knob, as to not disturb the peace despite its fiery landscape.",
        nextOption: 4
      }
    ]
  },
  {
    id: 3,
    question: "Zombies emerged from behind you, and you were overpowered. YOU DIED.",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      }
    ]
  },
  {
    id: 4,
    question: "It's Kento - the gun store owner.  I'm relieved he's still alive and kicking, and not looking to eat me like those monsters out there...",
    options: [
      {
        option: "Ask Kento What's going on?",
        nextOption: 7
      },
      {
        option: "Be a bastard and take his guns by force.",
        nextOption: 5
      },
      {
        option: "Barricade yourself with Kento and defend the store!.",
        nextOption: 6
      }]
  },
  {
    id: 5,
    question: "Kento was not down for that.  He dodges and shoots you in the chest.  You died!",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      }
    ]
  },
  {
  id: 6,
  question: "Kento and you spend a few minutes locking down the store, but then Kento comes from behind and bites you on the neck!  He's one of those things...You died!",
  options: [
    {
        option: "Try again.",
        nextOption: 0
    }
  ]
  },
  {
    id: 7,
    question: "Kento breathes heavily, trying to remember how he got back to the store....who are you?  You notice a bite mark on his neck, and his skin starts to turn crayola white. Kento is turning into one of those things!  What should I do?",
    options: [
      {
        option: "Stay back and look for something to keep him at bay!",
        nextOption: 9
      },
      {
        option: "Run and go for his shotgun near his feet!.",
        nextOption: 8
      },
      {
        option: "Scream for dear life!",
        nextOption: 8
      }]
  },
  {
    id: 8,
    question: "Kento got the upperhand and struck you with a critical blow!  You died!",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      }
    ]
    },
  //Pathway Juncture - 3 options 
    {
    id: 9,
    question: "You found a Broom! It was super effective. Kento...I'm sorry.  I have to keep moving if I want to get outta here.",
    options: [
      {
        option: "Keep the Broom Handy!",
        nextOption: 10.1
      },
      {
        option: "Jump the counter and take the shotgun!.",
        nextOption: 10.3
      },
      {
        option: "Go into the back, and break open the RESERVED WEAPONS case!",
        nextOption: 10.7
      }]
  },
  {
    id: 10.1,
    question: "Keeping the broom handy allows me to dodge and duck a lot of these monsters!  I'm faster and agile to get away!.",
    options: [
      {
        option: "Keep this pace, and make your way to the police station!",
        nextOption: 11
      },
      {
        option: "take a walk.  It's a nice night!.",
        nextOption: 10.2
      },
      {
        option: "I see a payphone, let me see if I can get the national guard on the line!",
        nextOption: 10.2
      }]
  },
  {
    id: 10.2,
    question: "There's too many of these zombies outside!  I can't escape.... You died!",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      }
    ]
    },
    {
    id: 10.3,
    question: "I jumped the counter and found Kento's shotgun.  I feel a lot better going out in these streets now..",
    options: [
      {
        option: "Head out the front door!",
        nextOption: 10.4
      },
      {
        option: "Head out the back door!.",
        nextOption: 10.5
      },
      {
        option: "Stay where you are!",
        nextOption: 10.5
      }]
  },
  {
    id: 10.4,
    question: "There's a horde of zombies out and about I'm going to try and sneak past...",
    options: [
      {
        option: "Initiate SNEAKY FEET...",
        nextOption: 10.6
      },
    ]
  },
  {
  id: 10.5,
  question: "I walked right into a horde of zombies on fire.  I can't escape.... You died!",
  options: [
    {
      option: 'Try again',
      nextOption: 0
    }
  ]
  },
  {
    id: 10.6,
    question: "They heard me!  BANG BANG!  I'm emptying out my shotgun, covered in blood....I got bit on my wrist....",
    options: [
      {
        option: "Head to the police station.",
        nextOption: 11,
        setState: {zombieBite: true}
      },
      ]
  },
  {
    id: 10.7,
    question: "The reserved weapons case.... I found a bazooka .  I'm feeling well protected now!  .",
    options: [
      {
        option: "Head out the front door!",
        nextOption: 10.8
      },
      {
        option: "Head out the back door!.",
        nextOption: 10.8
      },
      {
        option: "Stay where you are!",
        nextOption: 10.8
      }]
  },
  {
    id: 10.8,
    question: "I walked 3 steps and slipped on Kento's blood.  The bazooka went up in the air and landed on my legs.  I think they're broken.  I started yelling which attracted the zombies.  Crap.  You died! ",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      },
      ]
  },
  {
    id: 11,
    question: "I made it, time to head into the police station. It's completely deserted",
    options: [
      {
        option: "Wander into some of the rooms where you hear thumping.",
        nextOption: 11.1
      },
      {
        option: "Call out for anyone loudly.",
        nextOption: 11.1
      },
      {
        option: "Go into the Garage to look for a car to drive out of town!",
        nextOption: 11.2
      }]
  },
  {
    id: 11.1,
    question: "Zombie cops emerge from the precinct.  There's no way out.  You died! ",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      },
      ]
  },
  {
    id: 11.2,
    question: "The garage is pitch black...",
    options: [
      {
        option: "keep pressing forward.",
        nextOption: 11.4
      },
      {
        option: "Go back to the main floor.",
        nextOption: 11.3
      },
      {
        option: "Look for the circuit breaker.",
        nextOption: 11.3
      }]
  },
  {
    id: 11.3,
    question: "It was too dark and walked right into a hidden horde of zombies!  You died! ",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      },
      ]
  },
  {
    id: 11.4,
    question: "I found a patrol car, with the keys in the ignition. Car is turned on, time to escape this hell.",
    options: [
      {
        option: "Drive out of town?",
        nextOption: 11.5
      },
      {
        option: "Drive to the local diner?  I'm hungry..",
        nextOption: 11.5
      },
      {
        option: "Drive Home.",
        nextOption: 11.6
      }]
  },
  {
    id: 11.5,
    question: "I arrived in the new area.  It's completely covered in zombies.  There's no where to run, and as I ran out of gas, a new horde notices me.  You died!",
    options: [
      {
        option: "Try again.",
        nextOption: 0
      },
      ]
  },
  {
    id: 11.6,
    question: "I'd like to collect myself first...I'm not sure how bad this infection has spread. You arrive back home.  Everything seems normal.  After checking the perimeter, you bariccade the house.",
    options: [
      {
        option: "Go to sleep with the broomstick in hand",
        nextOption: 11.7
      },
      ]
  },
  {
    id: 11.7,
    question: "it's morning.  It's still hellish out there. Will have to plan the next phase of my escape...Bali maybe?.",
    options: [
      {
        option: "Thank you for playing!",
        nextOption: 0
      },
      ]
  },
  
];

startGame();
