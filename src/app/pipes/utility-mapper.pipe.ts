import { Pipe, PipeTransform } from '@angular/core';

export type Mapper<T, G> = (item: T, ...args: any[]) => G;

@Pipe({
  name: 'utilityMapper',
})
export class UtilityMapperPipe<T, G> implements PipeTransform {
  transform(value: T, mapper: Mapper<T, G>, ...args: any[]): G {
    return mapper(value, ...args);
  }
}
