import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.scss']
})
export class AddrecordComponent implements OnInit {
  title = "Add record";

  constructor() { }

  ngOnInit(): void {
  }

}
