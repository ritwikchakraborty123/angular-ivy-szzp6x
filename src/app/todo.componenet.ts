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
  todoForm = new FormGroup({
    shortdescription: new FormControl(),
    title: new FormControl(),
    expiry: new FormControl()
  });
  constructor() {
    this.name = "The Todo List";
  }
  onSubmit() {
    this.record.push(this.todoForm.value);
    console.log(this.todoForm.value);
  }
}
