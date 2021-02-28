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
  curr = new Date();
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
    // console.log(this.todoForm.value);
  }
  onClick(e,ind){
    //  var target = event.target || event.srcElement || event.currentTarget;
    this.open[ind]=this.open[ind]^1;
    
    
  }
  changestatus(e,ind){
    this.status[ind]+=1;
  }
  compare(f){
    let dates=f.split("-");

    if(parseInt(dates[0])<this.curr.getFullYear())
    return 1;
    else if(parseInt(dates[0])>this.curr.getFullYear())
    return 0;
    else if(parseInt(dates[1])<1+this.curr.getMonth())
    return 1;
    else if(parseInt(dates[1])>1+this.curr.getMonth())
    return 0;
    else if(parseInt(dates[2])<this.curr.getDate())
    return 1;
    
    return 0;
  }

}
