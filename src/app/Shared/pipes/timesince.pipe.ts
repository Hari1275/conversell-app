import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timesince' })
export class TimeSince implements PipeTransform {
  today = new Date(Date.now()).getDate();
  transform(value: string, args?: string): string {
    const d = new Date(value);
    if (this.today - d.getDate() === 0) {
      return 'Today';
    }
    if (this.today - d.getDate() === 1) {
      return 'Yesterday';
    }
    return d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
  }
}
