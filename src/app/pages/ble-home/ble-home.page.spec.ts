import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BleHomePage } from './ble-home.page';

describe('BleHomePage', () => {
  let component: BleHomePage;
  let fixture: ComponentFixture<BleHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BleHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
