import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChocolateService } from 'src/app/services/chocolate.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChocolateDetailsComponent } from 'src/app/chocolate-details/chocolate-details/chocolate-details.component';

export interface ChocolateData {
  id: string;
  brand: string;
  name: string;
  lowestPrice: string;
  averagePrice: string;
  shopName: string;
}

@Component({
  selector: 'app-chocolate-overview',
  templateUrl: './chocolate-overview.component.html',
  styleUrls: ['./chocolate-overview.component.scss']
})
export class ChocolateOverviewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'brand', 'name', 'lowestPrice', 'averagePrice', 'shopName', 'viewDetails'];
  dataSource: MatTableDataSource<ChocolateData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ChocolateService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllChocolates();
  }

  getAllChocolates() {
    this.service.getAllChocolates().subscribe(data => {
      const response = data.data[0].data;
      const updatedResponse = response.map(item => {
        const { pricePer100G, shop, link} = this.getLowestPriceAndOtherDetails(item.prices);
        return {
          id: item.id,
          brand: item.brand,
          name: item.name,
          lowestPrice: Math.round(pricePer100G * 100) / 100,
          averagePrice: Math.round(this.getAveragePrice(item.prices) * 100) / 100,
          shopName: shop,
          shopLink: link,
          currency: item.currency,
          nutrition: item.nutrition,
          prices: item.prices
        }
      })
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(updatedResponse);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getLowestPriceAndOtherDetails(priceArr) {
    if (priceArr.length === 0) {
      return {pricePer100G: 0, shop: '', link: ''}
    }
    const finalArr = priceArr.map(item => {
      return {
        pricePer100G: 100 * (item.unit === 'g' ? item.price / item.amount : item.price / (item.amount * 1000)),
         ...item
      }
    });
    finalArr.sort((a,b) => a.pricePer100G - b.pricePer100G);
    return finalArr[0];
  }

  getAveragePrice(priceArr) {
    if (priceArr.length === 0) {
      return 0
    }
    const finalArr = priceArr.map(item => {
      return 100 * (item.unit === 'g' ? item.price / item.amount : item.price / (item.amount * 1000))
    })
    return finalArr.reduce((a, b) => (a + b) / finalArr.length);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row) {
    this.dialog.open(ChocolateDetailsComponent, {
      data: row
    });
  }

}
