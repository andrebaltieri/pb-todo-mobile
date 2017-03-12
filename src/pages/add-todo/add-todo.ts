import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ListTodosPage } from '../list-todos/list-todos';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
  providers: [DataService]
})
export class AddTodoPage {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataService,
    private toastCtrl: ToastController) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])]
    });

  }

  ionViewDidLoad() {
  }

  submit() {
    this.dataService
      .create(this.form.value)
      .subscribe(data => {
        let toast = this.toastCtrl.create({
          message: 'Tarefa criada',
          duration: 1500
        });
        toast.present();
        this.navCtrl.setRoot(ListTodosPage);
      });
  }
}
