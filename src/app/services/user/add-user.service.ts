import { Injectable } from '@angular/core';
import {User} from '../../models/user/User';
import {ApiRoutes} from "../../models/ApiRoutes";
import {HttpClient} from '@angular/common/http';
import {ServerResponse} from "../../models/server/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }


  async addUserWithRole( user: User ): Promise<ServerResponse>{



      return this.http.post(
        `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_ADD}`,
        {
          login: user.userLogin,
          email: user.userEmail,
          firstName: user.userName,
          lastName: user.userLastname,
          phone: user.userPhone,
          password: user.userPassword,
          role: user.userRole,
          photo: user.userPhoto
        }
      ).toPromise() as Promise<ServerResponse>;



  }//register
}
