export const langs = {
  en: {
    //main menu
    menu: {
      main: 'Main',
      quiz: 'Quiz',
      results: 'Results',
      gallery: 'Gallery',
    },

    footer: {
      copyright: '&copy; Alexandr Reznichenko',
    },

    //main page
    main: {
      subtitle: 'Quiz',
      main_text: `recognizing birds \n by their voices`,
      main_btn: 'Play',
    },

    //quiz page
    quiz: {
      gameLevels: {
        warmup: 'Warm up',
        sparrow: 'Sparrow',
        forest: 'Forest birds',
        songbirds: 'Songbirds',
        predatory: 'Birds of prey',
        seabirds: 'Seabirds',
      },
      controls: {
        score: 'Score',
        next_level: {
          next_level: 'Next level',
          results: 'Results',
        },
      },
      answer: {
        blank: 'Listen to the player .\n Select a bird from the list',
      },
    },
    results: {
      title: 'Congratulations!',
      subtitle: `You took a quiz and dialled
      <span
      class="current_points"
      id="current_points"
      >{{currentPoints}}</span
      >
      out of 30 possible points!`,
      button_play: 'Play again',
    },
  },
  ru: {
    //main menu
    menu: {
      main: 'Главная',
      quiz: 'Викторина',
      results: 'Результаты',
      gallery: 'Галерея',
    },

    footer: {
      copyright: '&copy; Александр Резниченко',
    },
    //main page
    main: {
      subtitle: 'Викторина',
      main_text: 'распознавание птиц \n по их голосам',
      main_btn: 'Играть',
    },
    //quiz page
    quiz: {
      gameLevels: {
        warmup: 'Разминка',
        sparrow: 'Воробьинные',
        forest: 'Лесные птицы',
        songbirds: 'Певчие птицы',
        predatory: 'Хищные птицы',
        seabirds: 'Морские птицы',
      },
      controls: {
        score: 'Очки',
        next_level: {
          next_level: 'Вперёд',
          results: 'Результат',
        },
      },
      answer: {
        blank: 'Послушайте плеер. \n Выберите птицу из списка',
      },
    },
    results: {
      title: 'Поздравляем!',
      subtitle: `Вы прошли викторину и набрали
      <span
        class="current_points"
        id="current_points"
        >{{currentPoints}}</span
      >
      из 30 возможных баллов!`,
      button_play: 'Играть еще раз',
    },
  },
};
