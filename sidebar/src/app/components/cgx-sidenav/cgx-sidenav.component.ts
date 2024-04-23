import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface Icons {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-cgx-sidenav',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, MatListModule, NgIf],
  templateUrl: './cgx-sidenav.component.html',
  styleUrl: './cgx-sidenav.component.css',
})
export class CgxSidenavComponent{
  @Output() close = new EventEmitter<boolean>();

  isSidenavOpen = true;

  togleSidebar(){
    this.isSidenavOpen = !this.isSidenavOpen;
    this.close.emit(this.isSidenavOpen)
  }

  menu: Icons[] = [
    {
      label: 'Home',
      icon: 'home',
    },
    {
      label: '',
      icon: 'home',
    },
  ];
}
