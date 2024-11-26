import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { DataService } from '../services/integration';

@Component({
    selector: 'app-api-integration',
    templateUrl: './api-integration.component.html',
    styleUrls: ['./api-integration.component.scss', '../app.component.scss']
})
export class ApiIntegrationComponent implements OnInit{
    displayedColumns  : string[] = ['ID', 'Title'];
    resultsLength     : number = 0;
    data              : any;
    allData           : any;
    itemsPerPage      : number = 10;
    currentPage       : number = 0;
    onDestroy$        = new Subject<void>();

    constructor(
        private dataService: DataService,
    ){}

    ngOnInit(): void {
        this.getDataTable();
    }

    getDataTable() {
        this.dataService
        .getTable()
        .pipe(
            takeUntil(this.onDestroy$),
            tap((response) => {
                this.resultsLength = response.length;
                this.allData       = response;
                this.synchData(response)
            }),
        )
        .subscribe();
    }

    synchData(response: any) {
        const start      = this.currentPage * this.itemsPerPage;
        const temp       = response?.slice(start, start + this.itemsPerPage);
        return this.data = temp;
    }

    handlePageEvent(event: any) {
        this.currentPage = event.pageIndex;
        this.synchData(this.allData);
    }
}
