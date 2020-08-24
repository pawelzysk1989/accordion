import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from '../accordion-item-header/accordion-item-header.component';
import { AccordionItemContentComponent } from '../accordion-item-content/accordion-item-content.component';

describe('AccordionComponent', () => {
  let spectator: SpectatorHost<AccordionComponent>;
  const createHost = createHostFactory({
    component: AccordionComponent,
    declarations: [
      AccordionItemComponent,
      AccordionItemHeaderComponent,
      AccordionItemContentComponent,
    ],
  });

  it('should toggle the content when clicking on the header', () => {
    spectator = createHost(`
      <app-accordion>
        <app-accordion-item>
          <ng-template #header>
            <h2>Header</h2>
          </ng-template>
          <ng-template #content>
            <p>Content</p>
          </ng-template>
        </app-accordion-item>
      </app-accordion>
    `);

    expect('p').not.toExist();
    spectator.click('h2');
    expect('p').toExist();
    spectator.click('h2');
    expect('p').not.toExist();
  });
});
