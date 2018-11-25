"use strict";


export class ApiRoutes{


  static readonly SERVER_URL: string = 'http://localhost:5012/i-sell-admin-api/api/';

  //USER
  static readonly USER_ADD: string = 'addUserWithRole';
  static readonly GET_USER_ROLE_BYID: string = 'getRoleUserById';
  static readonly GET_USER_ROLES_LIST: string = 'list-users-role';


  //CATEGORIES
  static readonly GET_CATEGORIES_LIST: string = 'category/list';
  static readonly ADD_CATEGORY:        string = 'add-category';
  static readonly DELETE_CATEGORY:     string = 'delete-category';



}
