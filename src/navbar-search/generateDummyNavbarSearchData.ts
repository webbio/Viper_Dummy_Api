import { NavbarSearchCategory } from './navbar-search-category';
import { NavbarSearchItem } from './navbar-search-item';

export const generateDummyNavbarSearchData = (): NavbarSearchCategory[]  => {

  const brownRiceNoodles250g: NavbarSearchItem = {
    name: '100% Brown Rice noodles 250g',
    url: '/',
  };
  const brownRiceNoodles500g: NavbarSearchItem = {
    name: '100% Brown Rice noodles 500g',
    url: '/',
  };
  const hazelnutPaste250g: NavbarSearchItem = {
    name: '2 Mix, hazelnut almond paste 250g',
    url: '/',
  };
  const hazelnutPaste500g: NavbarSearchItem = {
    name: '2 Mix, hazelnut almond paste 500g',
    url: '/',
  };

  const grainMuesli750g: NavbarSearchItem = {
    name: '4-grain muesli 750g',
    url: '/',
  };
  const aoNoriFlakes20g: NavbarSearchItem = {
    name: 'AO-nori 20g',
    url: '/',
  };
  const saltedPotatoChips125g: NavbarSearchItem = {
    name: 'Salted Potato Chips 125g',
    url: '/',
  };
  const unsaltedPotatoChips125g: NavbarSearchItem = {
    name: 'Unsalted Potato Chips 125g',
    url: '/',
  };
  const mashedPotatoes100g: NavbarSearchItem = {
    name: 'Mashed potatoes 100g',
    url: '/',
  };

  const itemsGlutenFree: NavbarSearchItem[] = [
    brownRiceNoodles250g,
    brownRiceNoodles500g,
    hazelnutPaste250g,
    hazelnutPaste500g,
    grainMuesli750g,
    aoNoriFlakes20g,
    saltedPotatoChips125g,
    unsaltedPotatoChips125g,
    mashedPotatoes100g,
  ];

  const itemsPotatoes: NavbarSearchItem[] = [saltedPotatoChips125g, unsaltedPotatoChips125g, mashedPotatoes100g];

  const gluttenFree: NavbarSearchCategory = {
    name: 'Gluten free',
    items: itemsGlutenFree,
  };
  const potatoes: NavbarSearchCategory = {
    name: 'Potatoes',
    items: itemsPotatoes,
  };

  const faqPage: NavbarSearchItem = {
    name: 'FAQ',
    url: '/faq-overview',
  };
  const aboutUsPage: NavbarSearchItem = {
    name: 'About Us',
    url: '/about-us',
  };
  const newsPage: NavbarSearchItem = {
    name: 'News',
    url: '/news-overview',
  };
  const contactPage: NavbarSearchItem = {
    name: 'Contact',
    url: '/contact',
  };
  const RecipesPage: NavbarSearchItem = {
    name: 'Recipe',
    url: '/recipes',
  };
  const itemsPages: NavbarSearchItem[] = [faqPage, aboutUsPage, newsPage, contactPage, RecipesPage];

  const pages: NavbarSearchCategory = {
    name: 'Pages',
    items: itemsPages,
  };
  return [gluttenFree, potatoes, pages];

};
