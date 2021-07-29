import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatwithdoctorPage } from './chatwithdoctor.page';

describe('ChatwithdoctorPage', () => {
  let component: ChatwithdoctorPage;
  let fixture: ComponentFixture<ChatwithdoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatwithdoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatwithdoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
