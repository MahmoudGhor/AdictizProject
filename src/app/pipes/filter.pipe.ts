import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string, author: string): any {
    if (!value) {
      return null;
    }
    if (!args && !author) {
      return value;
    }
    args = args.toString().toLowerCase();
    if (args.toString() === 'choose your categorie' || args.toString() === '') {
      if (author !== '') {
        return value.filter(item => {
          return item.volumeInfo.authors ? item.volumeInfo.authors.toString().toLowerCase().includes(author) : null;
        });
      } else {
        return value;
      }
    } else if (author === '') {
      return value.filter(item => {
        return item.volumeInfo.categories ? item.volumeInfo.categories.toString().toLowerCase().includes(args) : null;
      });
    } else {
      return value.filter(item => {
        return item.volumeInfo.categories ? (item.volumeInfo.authors ? item.volumeInfo.categories.toString().toLowerCase().includes(args) &&
          item.volumeInfo.authors.toString().toLowerCase().includes(author) : null) : null;
      });
    }
  }

}
