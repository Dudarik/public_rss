export const store = {
  currentPage: 'main',

  ls_key_data: 'dudarik_songbird_data',
  ls_key_settings: 'dudarik_songbird_settings',
  ls_key_records: 'dudarik_songbird_records',

  levels: ['warmup', 'sparrow', 'forest', 'songbirds', 'predatory', 'seabirds'],
  currentPoints: 0,
  questionPoints: 5,
  currentLevel: 0,

  lastLevel: 0,

  isPlaySound: false,
  isInGame: false,
  isNextQuestion: false,
  isLastQuestion: false,

  currentQuestionTarget: {
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
