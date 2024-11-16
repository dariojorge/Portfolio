import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageCalculator]',
  exportAs: 'widthDirective',
  standalone: true
})
export class ImageCalculatorDirective {
  private observer!: IntersectionObserver;
  public imageWidth: number = 50;

  constructor(private img: ElementRef, private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.observeImageSize();
  }

  observeImageSize(): void {
    this.observer = new IntersectionObserver(() => {
      this.applyKnownImageSize();
    });

    this.observer.observe(this.img.nativeElement);
  }

  applyKnownImageSize() {
    this.imageWidth = this.img.nativeElement.offsetWidth;
  }
}
