import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalmapPage } from './medicalmap.page';

describe('MedicalmapPage', () => {
  let component: MedicalmapPage;
  let fixture: ComponentFixture<MedicalmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
