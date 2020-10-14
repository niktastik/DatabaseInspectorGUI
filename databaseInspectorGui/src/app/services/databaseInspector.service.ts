import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IDatabase } from '../database/database.interface';

@Injectable()
export class DatabaseInspectorService {
    private baseUrl = "https://localhost:44360/api/DBInspector";

    constructor(private http: HttpClient) {}

    retrieveDatabaseList() {
        return this.http.get<IDatabase[]>(this.baseUrl);
    }
}