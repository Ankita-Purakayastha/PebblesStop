import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-earringdetails',
  templateUrl: './earringdetails.component.html',
  styleUrls: ['./earringdetails.component.scss']
})
export class EarringdetailsComponent implements OnInit {
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
    {id:1,name:"Glass Earring", price:350,image:'../../assets/images/ear8Red.jpg'},
    {id:2,name:"Glass Earring", price:300,image:'../../assets/images/ear9Blue.jpg'},
    {id:3,name:"Glass Earring", price:200,image:'../../assets/images/ear7Red.jpg'},
    {id:4,name:"Glass Earring", price:350,image:'../../assets/images/ear18Red.jpg'},
    {id:5,name:"Glass Earring", price:300,image:'../../assets/images/ear3Blue.jpg'},
    {id:6,name:"Glass Earring", price:200,image:'../../assets/images/ear1Red.jpg'},
    {id:7,name:"Glass Earring", price:350,image:'../../assets/images/ear2Red.jpg'},
    {id:8,name:"Glass Earring", price:300,image:'../../assets/images/ear4Blue.jpg'},
    {id:9,name:"Glass Earring", price:200,image:'../../assets/images/ear17Red.jpg'},
    {id:10,name:"Glass Earring", price:350,image:'../../assets/images/ear6Red.jpg'},
    {id:11,name:"Glass Earring", price:300,image:'../../assets/images/ear11Blue.jpg'},
    {id:12,name:"Glass Earring", price:200,image:'../../assets/images/ear16Red.jpg'},
    {id:13,name:"Glass Earring", price:350,image:'../../assets/images/ear10Red.jpg'},
    {id:14,name:"Glass Earring", price:300,image:'../../assets/images/ear15Blue.jpg'},
    {id:15,name:"Glass Earring", price:200,image:'../../assets/images/ear12Red.jpg'},
    {id:16,name:"Glass Earring", price:350,image:'../../assets/images/ear13Blue.jpg'},
    {id:17,name:"Glass Earring", price:300,image:'../../assets/images/ear5Stone.jpg'},
    {id:18,name:"Glass Earring", price:200,image:'../../assets/images/ear14Blue.jpg'},
  ];

}
