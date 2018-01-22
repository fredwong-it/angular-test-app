import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tool-tip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input('tooltip') tooltip;
  show = false;

  constructor() { }

  ngOnInit() {
  }

}
