import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Photo } from "../../../core/models/photo.interface";

@Component({
  selector: "card-app",
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) dataCard!: Photo;
  @Input({ required: true }) isEditMode: boolean = false;

  constructor() {}
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
