import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsListPage } from './schoolsList.page';

describe('SchoolsListPage', () => {
  let component: SchoolsListPage;
  let fixture: ComponentFixture<SchoolsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
