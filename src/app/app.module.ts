import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { ListTodosPage } from '../pages/list-todos/list-todos';

@NgModule({
  declarations: [
    MyApp,
    AddTodoPage,
    ListTodosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddTodoPage,
    ListTodosPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
