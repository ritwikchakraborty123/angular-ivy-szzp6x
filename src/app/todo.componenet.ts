import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class todoComponent {
  record = [];
  name;
  open=[];
  status=[];
  todoForm = new FormGroup({
    shortdescription: new FormControl(),
    title: new FormControl(),
    expiry: new FormControl()
  });
  constructor() {
    this.name = "The Todo List";
  }
  onSubmit() {
    this.open.push(false);
    this.status.push(0);
    this.record.push(this.todoForm.value);
    console.log(this.todoForm.value);
  }
  onClick(e,ind){
    //  var target = event.target || event.srcElement || event.currentTarget;
    this.open[ind]=this.open[ind]^1;
    
    
  }
  changestatus(e,ind){
    this.status[ind]+=1;
  }
  
}
