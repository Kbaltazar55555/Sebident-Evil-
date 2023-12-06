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
    question: "Zombies emerged from behind, and you were overpowered. YOU DIED.",
    options: [
      {
        nextOption: 'Try again',
      }
    ]
  },
  {
    id: 4,
    question: "I'm relieved Kento is still alive and kicking, and not looking to eat me like those monsters out there...",
    options: [
      {
        option: "Ask Kento What's going on?",
        nextOption: 5
      },
      {
        option: "Be a bastard and take his guns by force.",
        nextOption: 6
      },
      {
        option: "Barricade yourself with Kento and defend the store!.",
        nextOption: 6
      }]
  },
  {
    id: 5,
    question: "Kento wasn't really into those options.  In a fit of rage, he shot you. YOU DIED.",
    options: [
      {
        nextOption: 'Try again',
      }
    ]
  },
];

startGame();
