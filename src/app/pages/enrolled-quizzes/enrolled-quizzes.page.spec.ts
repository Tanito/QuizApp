import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEnrolledQuizzesPage } from './enrolled-quizzes.page';

describe('ProfileEnrolledQuizzesPage', () => {
  let component: ProfileEnrolledQuizzesPage;
  let fixture: ComponentFixture<ProfileEnrolledQuizzesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEnrolledQuizzesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEnrolledQuizzesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
