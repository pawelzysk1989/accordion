import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemHeaderComponent {
  @Output() clicked = new EventEmitter<void>();

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.clicked.emit();
  }
}
