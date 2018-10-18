'use strict';



export class Category {
  get categoryID(): number {
    return this._categoryID;
  }

  set categoryID(value: number) {
    this._categoryID = value;
  }

  get categoryTitle(): string {
    return this._categoryTitle;
  }

  set categoryTitle(value: string) {
    this._categoryTitle = value;
  }

  private _categoryID: number;
  private _categoryTitle: string;

  constructor(value: number, name: string){
    this._categoryID = value;
    this._categoryTitle = name;
  }

}
