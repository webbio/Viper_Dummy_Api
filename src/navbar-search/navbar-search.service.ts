import { Injectable } from '@nestjs/common';

import { NavbarSearchCategory } from './navbar-search-category';
import { generateDummyNavbarSearchData } from './generateDummyNavbarSearchData';
import { NavbarSearchItem } from './navbar-search-item';

@Injectable()
export class NavbarSearchService {
  public searchItems(filter: string): NavbarSearchCategory[] {
    const staticData = generateDummyNavbarSearchData();
    let resultArray: NavbarSearchCategory[] = [];
    const filterUpperCase = filter.toUpperCase();
    const arraySize = staticData.length;
    for (let i = 0; i < arraySize; i += 1) {
      staticData[i].items.forEach((item: NavbarSearchItem) => {
        if (item.name.toUpperCase().includes(filterUpperCase)) {
          resultArray = addItemKeepingCategory(staticData[i].name, item, resultArray);
        }
      });
    }
    return resultArray;
  }
}

const addItemKeepingCategory = (
  categoryName: string,
  item: NavbarSearchItem,
  array: NavbarSearchCategory[],
): NavbarSearchCategory[] => {
  let categoryFound = false;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    if (array[i].name === categoryName) {
      array[i].items.push(item);
      i = arrayLength;
      categoryFound = true;
    }
  }
  if (!categoryFound) {
    array.push({ name: categoryName, items: [item] });
  }
  return array;
};
