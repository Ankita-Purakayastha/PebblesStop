import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-necklacedetails',
  templateUrl: './necklacedetails.component.html',
  styleUrls: ['./necklacedetails.component.scss']
})
export class NecklacedetailsComponent implements OnInit {
  productData:any;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((idValue)=>{
      this.productData=this.product.filter((categoryinfo)=>{
        return categoryinfo.id==idValue.id;
      })[0];
       console.log(idValue);
      
    })
  }
    product=[
      {id:1,name:"Necklace", price:350,image:'../../assets/images/facebook_1600266190129_6712002882323267352.jpg'},
      {id:2,name:"Necklace", price:300,image:'../../assets/images/facebook_1600266238891_6712003086848717460.jpg'},
      {id:3,name:"Necklace", price:200,image:'../../assets/images/_1600266272519_6712003227895118102.jpg'},
      {id:4,name:"Necklace", price:350,image:'../../assets/images/facebook_1600266287476_6712003290629851558.jpg'},
      {id:5,name:"Necklace", price:300,image:'../../assets/images/facebook_1600266302990_6712003355696200744.jpg'},
      {id:6,name:"Necklace", price:200,image:'../../assets/images/IMG_20200920_115642.jpg'},
      {id:7,name:"Necklace", price:350,image:'../../assets/images/IMG_20200920_115817.jpg'},
      {id:8,name:"Necklace", price:300,image:'../../assets/images/IMG_20200920_124054.jpg'},
      {id:9,name:"Necklace", price:200,image:'../../assets/images/IMG_20200920_124110.jpg'},
      {id:10,name:"Necklace", price:350,image:'../../assets/images/IMG_20200920_124608.jpg'},
      {id:11,name:"Necklace", price:300,image:'../../assets/images/pexels-avinash-patel-744563.jpg'},
      {id:12,name:"Necklace", price:200,image:'../../assets/images/pexels-axecop-2697616.jpg'},
    ];
  
}
