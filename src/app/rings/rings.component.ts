import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product=[
    {id:1,name:"Ring", price:350,image:'../../assets/images/pexels-valeriia-miller-3392860.jpg'},
    {id:2,name:"Ring", price:300,image:'../../assets/images/pexels-skitterphoto-630757.jpg'},
    {id:3,name:"Ring", price:200,image:'../../assets/images/pexels-say-straight-2735981.jpg'},
    {id:4,name:"Ring", price:350,image:'../../assets/images/pexels-marta-branco-1232931.jpg'},
    {id:5,name:"Ring", price:300,image:'../../assets/images/pexels-leah-kelley-776372.jpg'},
    {id:6,name:"Ring", price:200,image:'../../assets/images/pexels-judy-sengsone-750148.jpg'},
    {id:7,name:"Ring", price:350,image:'../../assets/images/pexels-freestocksorg-818649.jpg'},
    {id:8,name:"Ring", price:300,image:'../../assets/images/pexels-engin-akyurt-1457801.jpg'},
    {id:9,name:"Ring", price:200,image:'../../assets/images/pexels-element-digital-837254.jpg'},
    {id:10,name:"Ring", price:350,image:'../../assets/images/pexels-dima-valkov-3266703.jpg'},
    {id:11,name:"Ring", price:300,image:'../../assets/images/pexels-dids-1302307.jpg'},
    {id:12,name:"Ring", price:200,image:'../../assets/images/pexels-thorn-yang-115567.jpg'},
  ];
}
