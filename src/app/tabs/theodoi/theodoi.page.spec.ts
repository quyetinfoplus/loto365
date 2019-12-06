import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheodoiPage } from './theodoi.page';

describe('TheodoiPage', () => {
  let component: TheodoiPage;
  let fixture: ComponentFixture<TheodoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheodoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheodoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
