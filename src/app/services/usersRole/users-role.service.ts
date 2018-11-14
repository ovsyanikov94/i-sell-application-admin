import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersRoleService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersRole( ): Promise<ServerResponse>{

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USERS_ROLE}`,
    ).toPromise() as Promise<ServerResponse>;

  }//getCategories

}
