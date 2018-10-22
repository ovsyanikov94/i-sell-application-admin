import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import {Lot} from '../../models/lot/Lot';

// TODO: Replace this with your own data model type
export interface LotsListTableItem {

  lotName: string;
  lotSeller: string;
  lotCategory: string;
  lotStartPrice: number;
  lotSendDate: Date;
  lotStartDate: Date;

}//interface LotsListTableItem


// TODO: replace this with real data from your application
const EXAMPLE_DATA: LotsListTableItem[] = this.lots;

/**
 * Data source for the LotsListTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class LotsListTableDataSource extends DataSource<LotsListTableItem> {
  data: LotsListTableItem[] = EXAMPLE_DATA;

  public lots: Lot[];

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();

    this.lots = [
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
    ];

  }//LotsListTableDataSource

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<LotsListTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange

    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: LotsListTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }//getPagedData

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: LotsListTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }//getSortedData

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'lotName': return compare(a.lotName, b.lotName, isAsc);
        case 'lotCategory': return compare(+a.lotCategory, +b.lotCategory, isAsc);
        default: return 0;
      }
    });
  }//getSortedData
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}//compare
