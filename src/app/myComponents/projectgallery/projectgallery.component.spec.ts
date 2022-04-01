import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectgalleryComponent } from './projectgallery.component';

describe('ProjectgalleryComponent', () => {
  let component: ProjectgalleryComponent;
  let fixture: ComponentFixture<ProjectgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
