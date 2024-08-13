import {
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ControlContainer,
} from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit, Validator {
  @Input() placeholder = "";
  @Input() label = "";
  @Input() type: "text" | "password" | "number" = "text";
  @Input() showEye = false;
  @Input() formControlName!: string;
  @Input() focus = false;

  public imageEyeClose: string = "eye-password-close";
  public imageEyeOpen: string = "eye-password-open";

  @ViewChild("inputElement") inputElement!: ElementRef;

  value = "";
  showPassword = false;
  onChange = (value: any) => {};
  onTouched = () => {};
  control!: AbstractControl | null;

  constructor(
    private controlContainer: ControlContainer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.control =
      this.controlContainer.control?.get(this.formControlName) || null;
    if (this.control) {
      this.control.statusChanges.subscribe(() => this.onTouched());
    }
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.onChange(this.value);
  }

  ngAfterViewInit(): void {
    if (this.focus) {
      this.inputElement.nativeElement.focus();
      this.cdr.detectChanges();
    }
  }

  writeValue(value: any): void {
    this.value = value ?? "";
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(c: AbstractControl): { [key: string]: any } | null {
    return null;
  }

  handleBlur(): void {
    this.onTouched();
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.inputElement.nativeElement.blur();
    }
  }
}
