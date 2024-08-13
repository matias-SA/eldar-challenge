import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() disabled?: boolean;

  @Output() onClick = new EventEmitter();

  click($event: any): void {
    this.onClick.next($event);
  }
}
