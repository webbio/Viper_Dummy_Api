import uuid = require('uuid');

const generateNewsUpTo9 = (amount: number): any[] => {
  const cardList: any[] = [];
  if (amount === 1) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.18.png',
        alt: 'gezonde snack',
      },
      title: `Gezonde snack? Probeer onze nieuwe snackmixen!`,
      URL: '/',
    });
  }
  if (amount <= 2) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.22.png',
        alt: 'Phasellus lobortis',
      },
      title: `Phasellus lobortis ipsum`,
      URL: '/',
    });
  }
  if (amount <= 3) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.25.png',
        alt: 'Integer id',
      },
      title: `Integer id mauris id lorem condimentum blandit`,
      URL: '/',
    });
  }
  if (amount <= 4) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.31.png',
        alt: 'Integer id',
      },
      title: `Nullam sollicitudin orci sollicitudin velit blandit in pellentesque neque sollicitudin`,
      URL: '/news-single',
    });
  }

  if (amount <= 5) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.35.png',
        alt: 'Integer id',
      },
      title: `Consectetur adipiscing elit sed finibus`,
      URL: '/news-single',
    });
  }
  if (amount <= 6) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.38.png',
        alt: 'Integer id',
      },
      title: `Duis vestibulum lectus quis faucibus facilisis`,
      URL: '/news-single',
    });
  }
  if (amount <= 7) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.44.png',
        alt: 'Integer id',
      },
      title: `Aenean mollis venenatis nulla non tincidunt`,
      URL: '/news-single',
    });
  }
  if (amount <= 8) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.48.png',
        alt: 'Integer id',
      },
      title: `Nam sed mi mattis malesuada ante ac vehicula ex`,
      URL: '/news-single',
    });
  }
  if (amount <= 9) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Niews',
      cardLabels: [
        {
          title: '22 Jan 2018',
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.53.png',
        alt: 'Integer id',
      },
      title: `Nam ut turpis ac neque porttitor blandit`,
      URL: '/news-single',
    });
  }
  return cardList;
};

const GenerateNewsCardList = (length: number) => {
  let generateNewsCardList = [];
  for (let i = 0; i < length; i += 9) {
    const remain = length - i;
    let cardsTobeAdd = generateNewsUpTo9(remain);
    cardsTobeAdd = cardsTobeAdd.map(news => news.title += ` #${i}`);
    generateNewsCardList = [...generateNewsCardList, ...cardsTobeAdd];
  }
};
