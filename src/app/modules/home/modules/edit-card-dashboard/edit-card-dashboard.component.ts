import { Component, OnInit } from "@angular/core";
import {
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from "rxjs";
import { Photo } from "../../../../core/models/photo.interface";
import { HomeService } from "../../services/home.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastService } from "../../../../core/services/toast.service";

@Component({
  selector: "app-edit-card-dashboard",
  templateUrl: "./edit-card-dashboard.component.html",
  styleUrl: "./edit-card-dashboard.component.scss",
})
export class EditCardDashboardComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {}

  public form!: FormGroup;
  public photo$!: Observable<Photo>;
  public isEdit: boolean = false;
  private photo!: Photo;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initForm();
    this.searchDataEditPhoto();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public initForm(): void {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      url: ["", [Validators.required]],
      thumbnailUrl: ["", [Validators.required]],
    });
  }

  public handlerClick() {
    this.isEdit ? this.editPhoto() : this.addPhoto();
  }

  private editPhoto() {
    const photo = this.photo;
    const formValue = this.form.value;
    this.homeService.updatePhoto({ ...photo, ...formValue }).subscribe({
      next: () => {
        this.router.navigateByUrl("/editar");
        this.toastService.showToast("success", "Se edito exitosamente!");
      },
      error: () => {
        this.toastService.showToast("error", "Error al editar la foto");
      },
    });
  }

  private addPhoto() {
    const formValue = this.form.value;
    const albumId = Math.floor(Math.random() * 90 + 10);
    const id = Math.floor(Math.random() * 90 + 10);
    this.homeService.createPhoto({ ...formValue, albumId, id }).subscribe({
      next: () => {
        this.router.navigateByUrl("/editar");
        this.toastService.showToast(
          "success",
          "Se creo la foto correctamente!"
        );
      },
      error: () => {
        this.toastService.showToast("error", "Error al crear la foto");
      },
    });
  }

  private searchDataEditPhoto() {
    this.activatedRoute.params
      .pipe(
        map((params) => params["id"]),
        filter((id) => !!id),
        switchMap((id) =>
          this.homeService.getPhoto(id).pipe(
            map((photo) => photo),
            tap((photo) => {
              this.isEdit = true;
              this.photo = photo;
              this.form.patchValue({
                title: photo.title,
                url: photo.url,
                thumbnailUrl: photo.thumbnailUrl,
              });
            }),
            takeUntil(this.destroy$)
          )
        )
      )
      .subscribe();
  }
}
