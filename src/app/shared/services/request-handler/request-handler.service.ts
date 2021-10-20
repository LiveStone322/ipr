import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestParameters, RawRequestResult, RequestResult } from './models';

const ENDPOINT = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  constructor(private http: HttpClient) {}

  public request(params: RequestParameters): Observable<RequestResult> {
    return this.http.post<RawRequestResult>(ENDPOINT, params).pipe(map(this.mapToElements));
  }

  public requestById(params: RequestParameters, id: string): Observable<RequestResult> {
    return this.http.post<RawRequestResult>(ENDPOINT, params).pipe(
      map(this.mapToElements),
      map((table) => ({
        ...table,
        elements: table.elements.filter((x) => x.id === id),
      })),
    );
  }

  private mapToElements(result: RawRequestResult): RequestResult {
    const { totalCount, pageInfo, ...rest } = result;
    return {
      totalCount,
      pageInfo,
      elements: Object.values(rest)[0],
    };
  }
}
