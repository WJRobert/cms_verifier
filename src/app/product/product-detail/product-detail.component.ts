import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: ProductModel;
  private routeSub: Subscription;
  private productSub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.productSub = this.productService.getProduct(params.id).subscribe(
        result => {
          this.product = result;
        }
      );
    });
  }

}
