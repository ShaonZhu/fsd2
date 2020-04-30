import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateProfileComponent } from './update-profile.component';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileComponent ],
      imports: [AppRoutingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  function mockLocalStorage() {
    let store = {};
    const mockedLocalStorage = {
      getItem: (key: string): string => {
        console.log('getItem')
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockedLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockedLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockedLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockedLocalStorage.clear);
  }

  beforeEach(() => {
    mockLocalStorage();
    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
