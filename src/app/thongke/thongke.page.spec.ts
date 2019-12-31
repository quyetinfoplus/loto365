import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThongkePage } from './thongke.page';

describe('ThongkePage', () => {
  let component: ThongkePage;
  let fixture: ComponentFixture<ThongkePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongkePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThongkePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
