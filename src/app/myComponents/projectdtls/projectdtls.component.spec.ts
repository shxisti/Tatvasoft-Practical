import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdtlsComponent } from './projectdtls.component';

describe('ProjectdtlsComponent', () => {
  let component: ProjectdtlsComponent;
  let fixture: ComponentFixture<ProjectdtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
