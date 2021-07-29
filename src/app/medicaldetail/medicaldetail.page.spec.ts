import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicaldetailPage } from './medicaldetail.page';

describe('MedicaldetailPage', () => {
  let component: MedicaldetailPage;
  let fixture: ComponentFixture<MedicaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicaldetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
