import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ble2Page } from './ble2.page';

describe('Ble2Page', () => {
  let component: Ble2Page;
  let fixture: ComponentFixture<Ble2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ble2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ble2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
