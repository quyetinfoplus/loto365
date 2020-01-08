import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThongtincanhanPage } from './thongtincanhan.page';

describe('ThongtincanhanPage', () => {
  let component: ThongtincanhanPage;
  let fixture: ComponentFixture<ThongtincanhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtincanhanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThongtincanhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
