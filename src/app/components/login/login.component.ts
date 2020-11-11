import { RegisterComponent } from "./../register/register.component";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private registerDialog: MatDialog) {}

  ngOnInit(): void {}

  login(form: NgForm) {}

  onRegister() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "register-modal-component";
    dialogConfig.width = "80%";
    dialogConfig.height = "wrap-content";
    const registerModal = this.registerDialog.open(
      RegisterComponent,
      dialogConfig
    );
  }
}
