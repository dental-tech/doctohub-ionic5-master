import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctroslistPage } from './doctroslist.page';

describe('DoctroslistPage', () => {
  let component: DoctroslistPage;
  let fixture: ComponentFixture<DoctroslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctroslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctroslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
