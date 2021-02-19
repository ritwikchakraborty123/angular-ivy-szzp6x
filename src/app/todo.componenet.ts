import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class todoComponent {
  name = "The Todo List";
  todoForm = new FormGroup({
    title: new FormControl(),
    shortDescription: new FormControl(),
    expiry: new FormControl()
  });
  onSubmit(){
    console.log(this.todoForm.controls);
  }
}
