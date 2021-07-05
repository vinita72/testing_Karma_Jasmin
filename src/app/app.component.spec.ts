import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, waitForAsync, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let comp:AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    });
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'my-app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  }));




  it('should set submitted to true', waitForAsync(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, () => {
     fixture.detectChanges();
     spyOn(comp, 'onSubmit');
     el=fixture.debugElement.query(By.css('button')).nativeElement;
     el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  });



  it('form should be invalid', waitForAsync(() => {
    comp.contactForm.controls['username'].setValue('');
    comp.contactForm.controls['password'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));
  it('form should be valid', waitForAsync(() => {
    comp.contactForm.controls['username'].setValue('vachi');
    comp.contactForm.controls['password'].setValue('vachi12');
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});
