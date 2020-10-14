import { Component, OnInit } from '@angular/core';
import { DatabaseInspectorService } from '../services/databaseInspector.service';
import { IDatabase } from './database.interface';

@Component({
    selector: "databaseSummary",
    templateUrl: "./databaseSummary.component.html"
})

export class DatabaseSummaryComponent implements OnInit {
    public databasesToDisplay: IDatabase[];
    constructor(private databaseService: DatabaseInspectorService) {}

    ngOnInit() {
        this.getDatabaseList();
    }

    getDatabaseList() {
        this.databaseService.retrieveDatabaseList().subscribe((databasesToDisplay: IDatabase[]) => this.databasesToDisplay);
    }
}