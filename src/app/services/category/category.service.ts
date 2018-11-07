import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories( offset: number, limit: number ): Promise<ServerResponse>{

      const httpParams: HttpParams = new HttpParams()
        .set('limit' , limit.toString())
        .set('offset' , offset.toString());

      return this.http.get(
        `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_CATEGORIES_LIST}`,
        {
          params: httpParams
        }
      ).toPromise() as Promise<ServerResponse>;

  }//getCategories

}//CategoryService
