import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgxSidenavComponent } from './cgx-sidenav.component';

describe('CgxSidenavComponent', () => {
  let component: CgxSidenavComponent;
  let fixture: ComponentFixture<CgxSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgxSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgxSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
