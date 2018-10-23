import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import {Lot} from '../../models/lot/Lot';

/**
 * Data source for the LotsListTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class LotsListTableDataSource extends DataSource<Lot> {

  public lots: Lot[] = [];

  constructor(private paginator: MatPaginator, private sort: MatSort) {

    super();

    for ( let i = 0 ; i < 10 ; i++ ){

      const lot: Lot = new Lot();

      lot.lotName += ` ${i}`;
      this.lots.push(lot);

    }//for i

  }//LotsListTableDataSource

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Lot[]> {

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.lots),
      this.paginator.page,
      this.sort.sortChange

    ];

    // Set the paginators length
    this.paginator.length = this.lots.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.lots]));
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
  private getPagedData(data: Lot[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }//getPagedData

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Lot[]) {
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
