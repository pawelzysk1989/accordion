import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-content-example',
  templateUrl: './content-example.component.html',
  styleUrls: ['./content-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
