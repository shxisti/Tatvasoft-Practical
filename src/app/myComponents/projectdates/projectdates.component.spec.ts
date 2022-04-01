import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdatesComponent } from './projectdates.component';

describe('ProjectdatesComponent', () => {
  let component: ProjectdatesComponent;
  let fixture: ComponentFixture<ProjectdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
