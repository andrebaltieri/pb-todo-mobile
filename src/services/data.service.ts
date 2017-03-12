import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private serviceUrl: string = 'http://localhost:5000/';

    constructor(public http: Http) {

    }

    getTodos() {
        return this.http.get(this.serviceUrl + 'v1/todos')
            .map((res: Response) => res.json());
    }

    create(data: any) {
        return this.http.post(this.serviceUrl + 'v1/todos', data)
            .map((res: Response) => res.json());
    }

    markAsDone(id: string) {
        return this.http.put(
            this.serviceUrl + 'v1/todos/' + id,
            { done: true })
            .map((res: Response) => res.json());
    }
}
