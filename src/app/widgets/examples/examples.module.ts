import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentExampleComponent } from './components/content-example/content-example.component';
import { HeaderExampleComponent } from './components/header-example/header-example.component';

@NgModule({
  declarations: [ContentExampleComponent, HeaderExampleComponent],
  exports: [ContentExampleComponent, HeaderExampleComponent],
  imports: [CommonModule],
})
export class ExamplesModule {}
