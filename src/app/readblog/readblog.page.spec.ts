import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadblogPage } from './readblog.page';

describe('ReadblogPage', () => {
  let component: ReadblogPage;
  let fixture: ComponentFixture<ReadblogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadblogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
