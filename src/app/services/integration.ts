import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    endpoint = 'https://jsonplaceholder.typicode.com/todos';

    constructor(
        private httpClient: HttpClient,
    ) {}

    getTable(): Observable<any> {
        return this.httpClient.get(this.endpoint, {
            headers: {
              'Authorization'   : 'Bearer your-token',
              'Content-Type'    : 'application/json',
            },
        });
    }
}


