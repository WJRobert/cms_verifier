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
    this.typeIcon = 'menu_book';
  }

}
