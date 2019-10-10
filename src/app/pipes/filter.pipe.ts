import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string, searchName: string): any {
    if (!value) {
      return null;
    }
    if (!args && !searchName) {
      return value;
    }
    args = args.toString().toLowerCase();
    searchName = searchName.toString().toLowerCase();
    if (args.toString() === 'choose your categorie' || args.toString() === 'selectionnez votre catégorie' || args.toString() === '') {
      if (searchName !== '') {
        return value.filter(item => {
          return (item.volumeInfo.authors ? item.volumeInfo.authors.toString().toLowerCase().includes(searchName) : null)
            || item.volumeInfo.title.toString().toLowerCase().includes(searchName);
        });
      } else {
        return value;
      }
    } else if (searchName === '') {
      return value.filter(item => {
        return item.volumeInfo.categories ? item.volumeInfo.categories.toString().toLowerCase().includes(args) : null;
      });
    } else {
      return value.filter(item => {
        return item.volumeInfo.categories ? (item.volumeInfo.authors ? item.volumeInfo.categories.toString().toLowerCase().includes(args) &&
          (item.volumeInfo.authors.toString().toLowerCase().includes(searchName) ||
            item.volumeInfo.title.toString().toLowerCase().includes(searchName)) :
          item.volumeInfo.categories.toString().toLowerCase().includes(args) &&
          item.volumeInfo.title.toString().toLowerCase().includes(searchName)) : null;
      });
    }
  }

}
