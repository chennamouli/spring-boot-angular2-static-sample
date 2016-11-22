import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class HelloService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    getGreeting():Observable<string> {
        return this.http.get("/api/hello").map(res => res.text())
    }
}