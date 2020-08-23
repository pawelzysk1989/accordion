import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item-content',
  templateUrl: './accordion-item-content.component.html',
  styleUrls: ['./accordion-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemContentComponent {
  @Input()
  expanded = false;
}
