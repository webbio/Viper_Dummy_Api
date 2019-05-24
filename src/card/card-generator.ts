import uuid = require('uuid');

const generateRecipesUpTo9 = (amount: number): any[] => {
  const cardList: any[] = [];
  const timeIcon = "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg";
  const personIcon = "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg"
  if (amount === 1) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '1 persoon',
          icon: personIcon,
        },
        {
          title: '15 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.18.png',
        alt: 'gezonde snack',
      },
      title: `Gezonde snack? Probeer onze nieuwe snackmixen!`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 2) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '2 personen',
          icon: personIcon,
        },
        {
          title: '20 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.22.png',
        alt: 'Phasellus lobortis',
      },
      title: `Phasellus lobortis ipsum`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 3) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '4 personen',
          icon: personIcon,
        },
        {
          title: '1 persoon',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.25.png',
        alt: 'Integer id',
      },
      title: `Integer id mauris id lorem condimentum blandit`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 4) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '2 personen',
          icon: personIcon,
        },
        {
          title: '20 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.31.png',
        alt: 'Integer id',
      },
      title: `Nullam sollicitudin orci sollicitudin velit blandit in pellentesque neque sollicitudin`,
      URL: '/product-line-single',
    });
  }

  if (amount >= 5) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '2 persoon',
          icon: personIcon,
        },
        {
          title: '45 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.35.png',
        alt: 'Integer id',
      },
      title: `Consectetur adipiscing elit sed finibus`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 6) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '2 personen',
          icon: personIcon,
        },
        {
          title: '25 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.38.png',
        alt: 'Integer id',
      },
      title: `Duis vestibulum lectus quis faucibus facilisis`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 7) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '1 persoon',
          icon: personIcon,
        },
        {
          title: '25 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.44.png',
        alt: 'Integer id',
      },
      title: `Aenean mollis venenatis nulla non tincidunt`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 8) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '1 persoon',
          icon: personIcon,
        },
        {
          title: '15 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.48.png',
        alt: 'Integer id',
      },
      title: `Nam sed mi mattis malesuada ante ac vehicula ex`,
      URL: '/product-line-single',
    });
  }
  if (amount >= 9) {
    cardList.push({
      buttonText: 'Lees meer',
      category: 'Recept',
      cardLabels: [
        {
          title: '5 personen',
          icon: personIcon,
        },
        {
          title: '35 min',
          icon: timeIcon,
        },
      ],
      picture: {
        url:
          'https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/niews-overview/Screenshot+2019-05-13+at+09.37.53.png',
        alt: 'Integer id',
      },
      title: `Nam ut turpis ac neque porttitor blandit`,
      URL: '/product-line-single',
    });
  }
  return cardList;
};

const GenerateRecipesCardList = (length: number): any[] => {
  let generateRecipesCardList = [];
  for (let i = 0; i < length; i += 8) {
    const remain = length + 1 - i;
    const cardsTobeAdd = generateRecipesUpTo9(remain);
    for (let j = 0; j < cardsTobeAdd.length; j += 1) {
      cardsTobeAdd[j].title += `${cardsTobeAdd[j].title} #${i + 1 + j}`;
      generateRecipesCardList.push(cardsTobeAdd[j]);
    }
  }
  return generateRecipesCardList;
};

export { GenerateRecipesCardList};
