const sampleData = [
  {
    outcomeId: 1,
    story: 'The party sees a dragon swooping down towards the party! It looks furious with hunger.',
    endGame: false,
    storyImage: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/1000/1000/636252758629652181.jpeg',
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
    story: 'The dragon flies by without noticing the party, but it takes your prized cow, Lovabull. Sad day.',
    storyImage: 'https://cdn.dribbble.com/users/6115/screenshots/1252357/damages2.png',
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
    storyImage: 'https://i.pinimg.com/originals/2f/fc/4a/2ffc4af27468a68b20bf6045f4b91d3f.jpg',
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
    storyImage: 'https://i.pinimg.com/originals/b0/ac/25/b0ac2534bda6e6609cb8955b8c5ec1dc.jpg',
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
    story: 'After a lenghtly and supple conversation, the dragon feels seen for the first time in a thousand years. It flies off to place this lovely memory in it\'s treasure hoard.',
    storyImage: 'https://i.imgur.com/FS3kZQx.png',
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