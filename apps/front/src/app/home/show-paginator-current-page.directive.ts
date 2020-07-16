import {
  Component,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Directive({
  selector: '[pollsShowPaginatorCurrentPage]',
})
export class ShowPaginatorCurrentPageDirective implements OnInit, OnChanges {
  @Input() hideRange = false;

  constructor(
    private paginator: MatPaginator,
    private renderer: Renderer2,
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as Object).hasOwnProperty('hideRange')) {
      const label = this.viewContainerRef.element.nativeElement.querySelector(
        '.mat-paginator-range-label'
      );
      const display = changes.hideRange.currentValue ? 'none' : 'block';
      this.renderer.setStyle(label, 'display', display);
    }
  }

  ngOnInit(): void {
    const nativeElement = this.viewContainerRef.element.nativeElement;
    const nextButton = nativeElement.querySelector(
      '.mat-paginator-navigation-next'
    );

    const factory = this.resolver.resolveComponentFactory(
      DynamicPaginatorExtensionComponent
    );

    const componentRef = this.viewContainerRef.createComponent(
      factory,
      undefined,
      this.viewContainerRef.injector
    );
    componentRef.instance.paginator = this.paginator;

    this.renderer.insertBefore(
      nextButton.parentNode,
      componentRef.location.nativeElement,
      nextButton
    );
  }
}

@Component({
  template: `
    <div>
      {{ paginator.pageIndex + 1 }} / {{ paginator.getNumberOfPages() }}
    </div>
  `,
})
export class DynamicPaginatorExtensionComponent {
  @Input() paginator: MatPaginator;
  constructor(public elRef: ElementRef) {}
}
