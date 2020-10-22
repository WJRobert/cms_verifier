import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../product/product.model';
import {Subscription} from 'rxjs';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public products: ProductModel[];
  private productSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getAllProducts().subscribe(
      result => {
        this.products = result;
      }, error => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
