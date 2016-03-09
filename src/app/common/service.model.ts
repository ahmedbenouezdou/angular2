import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';

@Injectable

export class serviceModel{
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }
    fetchService(url:string) {
        return this.http.get(url)
            .map(res => res.json());
    }
    getElement(url:string,id:string) {
        return this.http.get(url+id)
            .map(res => res.json());
    }
    addElement(url:string,data:string){
        return this.http.post(url,JSON.stringify(data),{headers: new Headers({'Content-Type': 'application/json'})})
            .map(res => res.json());
    }
    updateElement(url:string,data:string){
        return this.http.put(url,JSON.stringify(data),{headers: new Headers({'Content-Type': 'application/json'})});
    }
    deleteElement(url:string,data:string){
        return this.http.delete(url+data.id);
    }

}