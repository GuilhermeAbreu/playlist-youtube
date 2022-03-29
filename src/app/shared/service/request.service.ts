import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class RequestService {

  constructor(
    public http: HttpClient,
  ) {
  }

  public async get(urlRequest: string, params?: any, body?: any): Promise<any> {
    return await this.request('GET', urlRequest, body, params);
  }

  public async post(urlRequest: string, body?: any, params?: {}): Promise<any> {
    return await this.request('POST', urlRequest, body, params);
  }

  private async request(
    method: string,
    urlRequest: string,
    body?: any,
    params?: {},
  ): Promise<any> {
    return await this.http
      .request(method, urlRequest, {
        body,
        params,
      })
      .toPromise();
  }
}
