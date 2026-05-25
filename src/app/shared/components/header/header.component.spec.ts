import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    });
    
    await TestBed.compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('deve renderizar o titulo corretamente', () => {
  const h1DebugElement = fixture.debugElement.query(By.css('h1'));
  expect(h1DebugElement.nativeElement.textContent).toBe('Gerenciador de Tarefas');
  });
});
