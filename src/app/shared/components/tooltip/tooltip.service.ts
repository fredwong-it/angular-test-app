import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ElementRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class TooltipService  {
    componentRef;
    buttonRef: ElementRef;
    tooltipInstance;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
        Observable.fromEvent(document, 'keydown').subscribe((e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                this.tooltipInstance.show = false;
            }
        });

        Observable.fromEvent(document, 'scroll').subscribe((e) => {
            this.updateTooltipTop();
        });
    }

    create() {
        if (!this.componentRef) {
            this.componentRef = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent).create(this.injector);
            this.componentRef.changeDetectorRef.detectChanges();

            this.appRef.attachView(this.componentRef.hostView);
            const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);

            this.tooltipInstance = (<TooltipComponent>this.componentRef.instance);
        }
    }

    update(tooltip, element: ElementRef) {
        this.buttonRef = element;
        this.tooltipInstance.tooltip = tooltip;
        this.tooltipInstance.show = true;
        this.componentRef.changeDetectorRef.detectChanges();

        this.updateTooltipTop();
        this.getTooltipSpan().style.left = this.getTooltipLeft() + 'px';
    }

    hide() {
        this.tooltipInstance.show = true;
    }

    private getTooltipSpan() {
        return this.componentRef.location.nativeElement.firstElementChild;
    }

    private getAboveTooltipTop() {
        let top = this.buttonRef.nativeElement.offsetTop;
        const toolTipHeight = this.getTooltipSpan().offsetHeight;

        top = top - toolTipHeight - 10;
        return top;
    }

    private getBottomTooltipTop() {
        const bottom = this.buttonRef.nativeElement.offsetTop + this.buttonRef.nativeElement.offsetHeight;

        return bottom + 10;
    }

    private getTooltipLeft() {
        const toolTipWidth = this.getTooltipSpan().offsetWidth;
        const width = this.buttonRef.nativeElement.offsetWidth;
        const delta = (toolTipWidth - width) / 2;
        let left = this.buttonRef.nativeElement.offsetLeft;

        if (left - delta > 0) {
            left = left - delta;
        } else {
            left = 0;
        }

        return left;
    }

    private updateTooltipTop() {
        const show = this.tooltipInstance.show;

        if (show) {
            if (window.pageYOffset > this.getAboveTooltipTop()) {
                this.getTooltipSpan().style.top = this.getBottomTooltipTop() + 'px';
            } else {
                this.getTooltipSpan().style.top = this.getAboveTooltipTop() + 'px';
            }
        }
    }
}
