import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'app-operation-menu',
  templateUrl: './operation-menu.component.html',
  styleUrls: ['./operation-menu.component.scss']
})
export class OperationMenuComponent implements OnInit {

  constructor(public service: ApiService) { }

  ngOnInit() {
  }

}
