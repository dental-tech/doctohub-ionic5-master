import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinddoctorPage } from './finddoctor.page';

describe('FinddoctorPage', () => {
  let component: FinddoctorPage;
  let fixture: ComponentFixture<FinddoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinddoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
