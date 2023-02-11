import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  @Input() placeholder: string = "";

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchGame(search: string) {
    this.onSearch.emit(search);
  }

}
