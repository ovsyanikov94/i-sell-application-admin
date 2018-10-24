'use strict';



export class Role {
  get roleID(): number {
    return this._roleID;
  }

  set roleID(value: number) {
    this._roleID = value;
  }
  get roleTitle(): string {
    return this._roleTitle;
  }

  set roleTitle(value: string) {
    this._roleTitle = value;
  }


  private _roleID: number;
  private _roleTitle: string;

  constructor(value: number, name: string){
    this.roleID = value;
    this.roleTitle = name;
  }

}
