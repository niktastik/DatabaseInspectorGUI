import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IDatabase } from '../database/database.interface';

@Injectable()
export class DatabaseInspectorService {
    private baseUrl = "https://localhost:44360/api/DBInspector";

    constructor(private http: HttpClient) {}

    retrieveDatabaseList(): Observable<IDatabase[]> {
        return this.http.get<IDatabase[]>(this.baseUrl);
    }
}