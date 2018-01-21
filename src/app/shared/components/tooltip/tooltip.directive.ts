import { Directive, Input, AfterViewInit, ViewContainerRef, HostListener } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
  @Input('tooltip') tooltip;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private tooltipService: TooltipService
  ) {
  }

  ngAfterViewInit() {
    this.tooltipService.create();
  }

  @HostListener('click', ['$event']) onClick($event) {
    this.tooltipService.update(this.tooltip, this.viewContainerRef.element);
  }

  @HostListener('blur', ['$event'])
  onBlur($event) {
    this.tooltipService.hide();
  }
}
