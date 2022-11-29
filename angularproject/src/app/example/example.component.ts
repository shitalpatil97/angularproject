import { Component, OnInit } from '@angular/core';
 class Employee{
  Id:number;
  name:string;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  emp:Employee=new Employee();

  constructor() { 
  this.emp.Id=1;
  this.emp.name='shital';
  }

  ngOnInit() {
    console.log(this.emp.Id);
    
  }

}
