import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from './components/accordion-item-header/accordion-item-header.component';
import { AccordionItemContentComponent } from './components/accordion-item-content/accordion-item-content.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeaderComponent,
    AccordionItemContentComponent,
  ],
  exports: [AccordionComponent, AccordionItemComponent],
  imports: [CommonModule],
})
export class AccordionModule {}
