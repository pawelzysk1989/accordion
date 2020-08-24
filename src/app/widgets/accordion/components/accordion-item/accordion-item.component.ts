import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ContentChild,
} from '@angular/core';

interface HeaderContext {
  $implicit: boolean;
}

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
  private isExpanded = false;
  @ContentChild('header')
  headerTemplate: TemplateRef<any> | null = null;

  @ContentChild('content')
  contentTemplate: TemplateRef<any> | null = null;

  @Input() set expanded(expanded: boolean) {
    this.isExpanded = expanded;
  }

  get expanded(): boolean {
    return this.isExpanded;
  }

  @Output()
  headerClicked = new EventEmitter<void>();

  onHeaderClick(): void {
    this.headerClicked.emit();
  }

  get headerContext(): HeaderContext {
    return {
      $implicit: this.expanded,
    };
  }
}
