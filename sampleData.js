const sampleData = [
  {
    outcomeId: 1,
    story: 'The party sees a dragon swooping down towards the party! It looks furious with hunger.',
    endGame: false,
    choices: [
      {
        text: 'Run and duck for cover!',
        outcomeId: 2
      },
      {
        text: 'Draw your weapons and attack!',
        outcomeId: 3
      },
      {
        text: 'Beg for mercy.',
        outcomeId: 4
      },
      {
        text: 'Seduce the dragon.',
        outcomeId: 5
      }
    ]
  },
  {
    outcomeId: 2,
    story: 'The dragon flys by without noticing the party, but it takes your prized cow, Lovabull. Sad day.',
    endGame: true,
    choices: [
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      }
    ]
  },
  {
    outcomeId: 3,
    story: 'The party rushes forward slashing with sword, loosing arrows, and slinging spells! You feel a brief rush of heat before the dragon enjoys a nice meal. TPK!',
    endGame: true,
    choices: [
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      }
    ]
  },
  {
    outcomeId: 4,
    story: 'As the party protrates themselves in front of the dragon, everyone realizes no one took the time to learn Draconic. But fear not, the shame over being monolingual passes quickly after being showered in flames.',
    endGame: true,
    choices: [
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      }
    ]
  },
  {
    outcomeId: 5,
    story: 'After a lenghtly and supple conversation, the dragon feels seen for the first time in a thousand years. It flys off to place this lovely memory in it\'s treasure hoard.',
    endGame: true,
    choices: [
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      },
      {
        text: '',
        outcomeId: 0
      }
    ]
  },
]

export default sampleData;