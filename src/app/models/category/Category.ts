'use strict';



export class Category {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get categoryTitle(): string {
    return this._categoryTitle;
  }

  set categoryTitle(value: string) {
    this._categoryTitle = value;
  }

  private _id: string;
  private _categoryTitle: string;

  constructor(id: string, name: string){
    this._id = id;
    this._categoryTitle = name;
  }

}
