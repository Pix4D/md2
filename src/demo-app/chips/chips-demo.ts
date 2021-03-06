import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'md-chips-demo',
  templateUrl: 'chips-demo.html'
})
export class ChipsDemo {
  isDisabled: boolean = false;
  isRemovable: boolean = true;

  private _item: Array<any>;
  private _itemsData: Array<any> = [
    { name: 'Vadodara', value: '1' },
    { name: 'Mumbai', value: '5' },
    { name: 'Goa', value: '6' }
  ];
  private _items: Array<any> = [
    { text: 'Vadodaraa', id: '8' },
    { text: 'Mumbaia', id: '2' },
    { text: 'Goaa', id: '4' }
  ];
  private _validPattern = /^[0-9]*$/;
  handleChange(value: any) {
    console.log('Changed data: ', value);
  }
}
