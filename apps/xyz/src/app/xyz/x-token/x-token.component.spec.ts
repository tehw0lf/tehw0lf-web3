import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XTokenComponent } from './x-token.component';

describe('XTokenComponent', () => {
  let component: XTokenComponent;
  let fixture: ComponentFixture<XTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
