import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { startWith, mapTo, mergeMap } from 'rxjs/operators';
import { AccordionItemComponent } from './../accordion-item/accordion-item.component';
import { merge } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent) items = new QueryList<
    AccordionItemComponent
  >();

  ngAfterContentInit(): void {
    this.items.changes
      .pipe(
        startWith([]),
        mapTo(this.items),
        mergeMap((items) =>
          merge(...items.map((item) => item.headerClicked.pipe(mapTo(item))))
        )
      )
      .subscribe((item) => this.toggle(item));
  }

  toggle(item: AccordionItemComponent): void {
    item.expanded = !item.expanded;
  }
}
