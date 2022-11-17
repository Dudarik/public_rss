export const store = {
  currentPage: 'main',

  levels: ['warmup', 'sparrow', 'forest', 'songbirds', 'predatory', 'seabirds'],
  currentPoints: 0,
  questionPoints: 5,
  currentLevel: 0,

  lastLevel: 0,

  isPlaySound: false,
  isInGame: false,
  isNextQuestion: false,
  isLastQuestion: false,

  currentQuestion: {
    id: 0,
    name: '',
    species: '',
    description: '',
    audio: '',
    image: '',
  },

  settings: {
    isLSAvailabel: false,
    language: 'ru',
    volume: 50,
  },
};
