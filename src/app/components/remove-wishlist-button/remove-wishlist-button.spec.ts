import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveWishlistButton } from './remove-wishlist-button';

describe('RemoveWishlistButton', () => {
  let component: RemoveWishlistButton;
  let fixture: ComponentFixture<RemoveWishlistButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveWishlistButton],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveWishlistButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
