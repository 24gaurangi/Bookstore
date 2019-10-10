import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:"search"
})
export class SearchBookPipe implements PipeTransform {
    transform(value:any, searchkey:string) {
        console.log('ss',value,searchkey);
        if (value.length===0 || searchkey===''){
            return value;
        }
        else {
            const matchRegex = new RegExp(searchkey);
            var foundBooks = value.filter(function(book) {
                console.log(book.title);
                return matchRegex.test(book.title)
                
             });
             console.log('df',foundBooks)
            return foundBooks; 
        }
    }
}