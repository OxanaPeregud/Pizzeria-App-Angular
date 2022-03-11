import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL: string,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openLoginForm() {
    this.dialog.open(LoginComponent, {
        width: '500px',
        height: '350px'
      }
    );
  }
}
