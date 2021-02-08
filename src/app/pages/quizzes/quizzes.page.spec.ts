import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizzesPage } from './quizzes.page';

describe('QuizzesPage', () => {
  let component: QuizzesPage;
  let fixture: ComponentFixture<QuizzesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizzesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
