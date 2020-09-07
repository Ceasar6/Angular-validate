import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {
  @Input() massage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
