import { Component } from "@angular/core";

@Component({
    selector:'app-input',
    template:'<p>This is a warning, you are in a danger!</p>',
    styleUrls:['./input.component.css']

})
export class Employee{
    empId:number;
    empName:string;
    constructor(id:number,name:string){
        this.empId=id;
        this.empName=this.empName;
    }
    show(){
        console.log(this.empName);
        
    }
}
var emp=new Employee(1,'shital');
emp.show();