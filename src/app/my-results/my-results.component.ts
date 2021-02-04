import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.scss']
})
export class MyResultsComponent implements OnInit {

  title = "My results";

  constructor() { }

  ngOnInit(): void {
  }

}
