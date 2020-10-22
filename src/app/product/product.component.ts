import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: ProductModel;
  public typeIcon: string;

  constructor() {
  }

  ngOnInit(): void {
    this.determineTypeIcon();
  }

  private determineTypeIcon(): void {
    switch (this.product.type) {
      case 'Notebook':
        this.typeIcon = 'laptop';
        break;
      case 'Cellphone':
        this.typeIcon = 'smartphone';
        break;
      default:
        this.typeIcon = 'menu_book';
        break;
    }
  }

}
