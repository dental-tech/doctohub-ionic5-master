import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabdetailsPage } from './labdetails.page';

describe('LabdetailsPage', () => {
  let component: LabdetailsPage;
  let fixture: ComponentFixture<LabdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
