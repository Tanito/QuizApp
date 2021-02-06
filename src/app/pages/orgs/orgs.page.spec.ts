import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrgsPage } from './orgs.page';

describe('OrgsPage', () => {
  let component: OrgsPage;
  let fixture: ComponentFixture<OrgsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrgsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
