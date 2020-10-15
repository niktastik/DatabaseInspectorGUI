import { Component, OnInit } from '@angular/core';
import { DatabaseInspectorService } from '../services/databaseInspector.service';
import { IDatabase } from './database.interface';

@Component({
    selector: "databaseSummary",
    templateUrl: "./databaseSummary.component.html"
})

export class DatabaseSummaryComponent implements OnInit {
    public databasesToDisplay: IDatabase[];
    constructor(public databaseService: DatabaseInspectorService) {}

    ngOnInit() {
        this.databaseService.retrieveDatabaseList().subscribe((data: IDatabase[]) => this.databasesToDisplay = data);
    }
}