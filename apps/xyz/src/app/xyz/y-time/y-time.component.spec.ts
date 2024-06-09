import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YTimeComponent } from './y-time.component';

describe('YTimeComponent', () => {
  let component: YTimeComponent;
  let fixture: ComponentFixture<YTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
