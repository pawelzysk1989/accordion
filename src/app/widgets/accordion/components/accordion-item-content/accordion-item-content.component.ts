import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
} from '@angular/core';
import { enterLeave } from '../../utils/animations/enter-leave.animation';

@Component({
  selector: 'app-accordion-item-content',
  templateUrl: './accordion-item-content.component.html',
  styleUrls: ['./accordion-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeave('enter-leave', 200)],
})
export class AccordionItemContentComponent {
  @Input() expanded = false;
  @Input() template: TemplateRef<any> | null = null;
}
