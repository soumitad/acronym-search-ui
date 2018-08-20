import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 @Injectable()
export class AppService {
constructor(private http: HttpClient) {}


searchAcronym(acronym): Observable<any> {
const url = `http://localhost:8080/search/acronym/${acronym}`;
return this.http.get(url).pipe(map(res => res));
    }
}
