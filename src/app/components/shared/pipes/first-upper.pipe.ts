import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string[], separator: any): string[] {
    
    return value.map((e)=>e.charAt(0).toUpperCase()+e.slice(1));
  }

}
