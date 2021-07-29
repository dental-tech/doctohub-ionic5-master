import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApptsPage } from './appts.page';

describe('ApptsPage', () => {
  let component: ApptsPage;
  let fixture: ComponentFixture<ApptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
