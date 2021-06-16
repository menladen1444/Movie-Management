import { Component, Input, OnInit } from '@angular/core';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-nation-item',
  templateUrl: './nation-item.component.html',
  styleUrls: ['./nation-item.component.css']
})
export class NationItemComponent implements OnInit {

  @Input() nation!: Nation;
  @Input() index: any;

  constructor(private nationService: NationService) { }

  ngOnInit(): void {
  }

}
