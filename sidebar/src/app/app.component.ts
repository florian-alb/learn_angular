import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CgxSidenavComponent } from './components/cgx-sidenav/cgx-sidenav.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CgxSidenavComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  isSidenavOpen = true;

  title = 'sidebar';

  togleSidenav(){
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
