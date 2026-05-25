import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './shared/components/header/header.component';
import { MockHeaderComponent } from '@testing/mocks/mock-header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    TestBed.overrideComponent(AppComponent, {
      remove: {
        imports: [HeaderComponent],
      },
      add: {
        imports: [MockHeaderComponent],
      },
    });
  });

  it('deve renderizar o componente header', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const headerDebugElement = fixture.debugElement.query(By.css('app-header'));

    expect(headerDebugElement).toBeTruthy();
  });

  it('deve renderizar o componente router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const routerOutletDebugElement = fixture.debugElement.query(
      By.css('router-outlet')
    );

    expect(routerOutletDebugElement).toBeTruthy();
  });
});
