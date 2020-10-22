import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private exampleProducts = [
    {
      cmsId: '1',
      name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
      type: 'Notebook',
      price: 15000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc et congue rutrum, enim purus tincidunt nisi, a faucibus arcu risus laoreet orci. Vestibulum in congue ante, congue aliquet dolor. Nunc non est nulla. In hac habitasse platea dictumst. Donec feugiat arcu eu varius tincidunt. Donec pellentesque ligula sed neque varius iaculis. Phasellus tristique elementum porttitor. Duis lacinia volutpat sapien, faucibus consequat arcu scelerisque id.',
      imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png'
    },
    {
      cmsId: '2',
      name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
      type: 'Cellphone',
      price: 5000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc et congue rutrum, enim purus tincidunt nisi, a faucibus arcu risus laoreet orci. Vestibulum in congue ante, congue aliquet dolor. Nunc non est nulla. In hac habitasse platea dictumst. Donec feugiat arcu eu varius tincidunt. Donec pellentesque ligula sed neque varius iaculis. Phasellus tristique elementum porttitor. Duis lacinia volutpat sapien, faucibus consequat arcu scelerisque id.',
      imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg'
    },
    {
      cmsId: '3',
      name: 'Notebook Dell Alienware - i7 16GB',
      type: 'Notebook',
      price: 32000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc et congue rutrum, enim purus tincidunt nisi, a faucibus arcu risus laoreet orci. Vestibulum in congue ante, congue aliquet dolor. Nunc non est nulla. In hac habitasse platea dictumst. Donec feugiat arcu eu varius tincidunt. Donec pellentesque ligula sed neque varius iaculis. Phasellus tristique elementum porttitor. Duis lacinia volutpat sapien, faucibus consequat arcu scelerisque id.',
      imageUrl: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg'
    },
    {
      cmsId: '4',
      name: 'Smartphone Samsung Galaxy S7 Edge',
      type: 'Cellphone',
      price: 4000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc et congue rutrum, enim purus tincidunt nisi, a faucibus arcu risus laoreet orci. Vestibulum in congue ante, congue aliquet dolor. Nunc non est nulla. In hac habitasse platea dictumst. Donec feugiat arcu eu varius tincidunt. Donec pellentesque ligula sed neque varius iaculis. Phasellus tristique elementum porttitor. Duis lacinia volutpat sapien, faucibus consequat arcu scelerisque id.',
      imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png'
    },
    {
      cmsId: '5',
      name: 'The Amazing Spider-Man (1963) #1',
      type: 'Comic',
      price: 400000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc et congue rutrum, enim purus tincidunt nisi, a faucibus arcu risus laoreet orci. Vestibulum in congue ante, congue aliquet dolor. Nunc non est nulla. In hac habitasse platea dictumst. Donec feugiat arcu eu varius tincidunt. Donec pellentesque ligula sed neque varius iaculis. Phasellus tristique elementum porttitor. Duis lacinia volutpat sapien, faucibus consequat arcu scelerisque id.',
      imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/d/40/5196582d03800/detail.jpg'
    }
  ];

  constructor() { }

  public getAllProducts(): Observable<ProductModel[]> {
    return of<ProductModel[]>(this.exampleProducts);
  }

  public getProduct(cmsId: string): Observable<ProductModel> {
    let returnProduct = null;
    this.exampleProducts.forEach(product => {
      if (product.cmsId === cmsId) {
        returnProduct = product;
      }
    });
    return of<ProductModel>(returnProduct);
  }
}
