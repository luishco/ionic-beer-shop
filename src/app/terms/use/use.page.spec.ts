import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsePage } from './use.page';

describe('UsePage', () => {
  let component: UsePage;
  let fixture: ComponentFixture<UsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
