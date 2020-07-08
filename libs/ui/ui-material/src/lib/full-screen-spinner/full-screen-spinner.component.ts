import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'polls-full-screen-spinner',
  templateUrl: './full-screen-spinner.component.html',
  styleUrls: ['./full-screen-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenSpinnerComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
