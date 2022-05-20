import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface NutritionData {
  name: string;
  total: number;
  saturated: number;
}

@Component({
  selector: 'app-chocolate-details',
  templateUrl: './chocolate-details.component.html',
  styleUrls: ['./chocolate-details.component.scss']
})
export class ChocolateDetailsComponent implements OnInit {

  displayedColumns: string[] = ['shop', 'price'];
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {brand, name, lowestPrice, currency, shopLink, shopName, nutrition, prices}) {}

  ngOnInit(): void {
    const nutritionData = (Object.entries(this.data.nutrition));
    this.dataSource = this.data.prices; 
  }
}
