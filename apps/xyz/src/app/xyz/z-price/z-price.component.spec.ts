import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZPriceComponent } from './z-price.component';

describe('ZPriceComponent', () => {
  let component: ZPriceComponent;
  let fixture: ComponentFixture<ZPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZPriceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
