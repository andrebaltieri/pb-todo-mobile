import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ItemSliding, ToastController } from 'ionic-angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-list-todos',
  templateUrl: 'list-todos.html',
  providers: [DataService]
})
export class ListTodosPage {
  public todos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private dataService: DataService,
    public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    this.getTodos();
  }

  getTodos() {
    let loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    loader.present();

    this.dataService
      .getTodos()
      .subscribe(data => {
        this.todos = data;
        loader.dismiss();
      });
  }

  markAsDone(slidingItem: ItemSliding, id: string) {
    this.dataService
      .markAsDone(id)
      .subscribe(data => {
        for (var index = 0; index < this.todos.length; index++) {
          var todo = this.todos[index];
          if (todo.id == id) {
            this.todos[index].done = true;
          }
        }

        slidingItem.close();

        let toast = this.toastCtrl.create({
          message: 'Tarefa marcada com concluída',
          duration: 1500
        });
        toast.present();
      });
  }

  remove(id: string) {
    let alert = this.alertCtrl.create({
      title: 'Tarefa removida',
      buttons: ['OK']
    });
    alert.present();
  }

}
