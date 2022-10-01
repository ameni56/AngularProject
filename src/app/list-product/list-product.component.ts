import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  constructor() { 

}
  ngOnInit(): void {
    this.title= 'My App Store';
    this.list=[
      {
        id:12,
      title:'T-Shirt 1',
      price:28,
      
      nbrLike:40,
      description:'nice T-shirt',
      category:'Women',
      quantity : 3,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2F9b%2F009b045d269d61b7b6b9818344c5b04b24a24c79.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
      },
      {
        id:12,
        title:'T-Shirt 2',
        price:21,
        nbrLike:20,
        description:'nice T-shirt',
        category:'Women',
        quantity : 0,
        picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F70%2F3b7037a44d389c2417b70165179422da90ff7009.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
        }
      ]

      
  }


  incrementLike(product:Product):void{
    let i=this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++;
      //connect to the backend side
    }

  }
  buyProduct(product:Product):void{
    let i=this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--;
      //connect to the backend side
    }

  }
}
