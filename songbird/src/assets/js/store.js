export const store = {
  currentPoints: 0,
  questionPoints: 5,

  isPlay: false,
  isInGame: false,
  isNextQuestion: false,

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
    language: 'en',
    volume: 50,
  },
};
