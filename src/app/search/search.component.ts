import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() keyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getValue(event)
  {
    const value = event.target.value.toLowerCase();
    this.keyword.emit(value);
  }
}
