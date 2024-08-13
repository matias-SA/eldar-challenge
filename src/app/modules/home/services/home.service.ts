import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Photo } from "../../../core/models/photo.interface";
import { environment } from "../../../../environments/environment";

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public getPhotos(
    page: number,
    pageSize: number,
    filterTitle: string = ""
  ): Observable<{ photos: Photo[]; totalPages: number }> {
    return this.httpClient
      .get<Photo[]>(`${environment.apiUrl}/albums/2/photos`)
      .pipe(
        map((photos) => {
          const filteredPhotos = filterTitle
            ? photos.filter((photo) =>
                photo.title.toLowerCase().includes(filterTitle.toLowerCase())
              )
            : photos;

          const totalPages = Math.ceil(filteredPhotos.length / pageSize);
          const startIndex = (page - 1) * pageSize;
          const endIndex = startIndex + pageSize;
          const paginatedPhotos = filteredPhotos.slice(startIndex, endIndex);
          return { photos: paginatedPhotos, totalPages };
        })
      );
  }

  public getPhoto(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(`${environment.apiUrl}/photos/${id}`);
  }

  public updatePhoto(payload: Photo): Observable<Photo[]> {
    return this.httpClient.put<Photo[]>(
      `${environment.apiUrl}/photos/${payload.id}`,
      payload,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  }

  public createPhoto(payload: Photo): Observable<Photo[]> {
    return this.httpClient.post<Photo[]>(
      `${environment.apiUrl}/photos`,
      payload,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  }
}
