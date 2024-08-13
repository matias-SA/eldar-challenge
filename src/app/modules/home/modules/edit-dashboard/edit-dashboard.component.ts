import { Component, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { Photo } from "../../../../core/models/photo.interface";
import { HomeService } from "../../services/home.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-dashboard",
  templateUrl: "./edit-dashboard.component.html",
})
export class EditDashboardComponent implements OnInit {
  constructor(private homeService: HomeService, private fb: FormBuilder) {}

  public photos: Photo[] = [];
  public form!: FormGroup;
  public currentPage: number = 1;
  public pageSize: number = 9;
  public totalPages: number = 0;
  public filterTitle: string = "";
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initForm();
    this.getPhotos(this.currentPage, this.filterTitle);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getPhotos(page: number, filterTitle: string = "") {
    this.homeService
      .getPhotos(page, this.pageSize, filterTitle)
      .subscribe((response) => {
        this.photos = response.photos;
        this.totalPages = response.totalPages;
      });
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getPhotos(this.currentPage);
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPhotos(this.currentPage);
    }
  }

  public initForm(): void {
    this.form = this.fb.group({
      search: [""],
    });

    this.form
      .get("search")
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.filterTitle = value;
        this.currentPage = 1;
        this.getPhotos(this.currentPage, value);
      });
  }
}
