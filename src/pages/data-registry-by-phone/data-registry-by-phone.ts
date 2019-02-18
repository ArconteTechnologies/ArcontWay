import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  LoadingController,
  ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { TravelerProvider } from '../../providers/traveler/traveler';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DataRegistryByPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-registry-by-phone',
  templateUrl: 'data-registry-by-phone.html',
})
export class DataRegistryByPhonePage {
  //creacion del FORM
  registryForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required)
  });

  //Creacion de Objeto User 
  public user = {
    name: "",
    lastname: "",
    second_lastname: null,
    lada: null,
    number_phone: null,
    email: null,
    password: null,
    points: "0",
    total_trips: "0",
    tipo_registro: "PHONE"
  };//

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiUser: UserProvider,
    public apiTraveler: TravelerProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
     private storage: Storage) {
  }

  //Verifica si ya esta registrado el Usuario
  ionViewWillEnter() {
    //Crear componente  Loading
    const loader = this.loadingCtrl.create({
      content: "Por favor espere..."
    });
    //

    //Creacion componente toast
    const toast = this.toastCtrl.create({
      duration: 4000
    });
    //
    loader.present();//muestra el componente loading

    this.storage.get('token').then((token) => {
      this.apiUser.verifyTraveler(token)
      .subscribe((data) => {
        if(data["success"] == true){
          this.storage.set("id_user", data["id"]);
          this.navCtrl.setRoot(HomePage);
        }
      }, 
      (error) => {
        loader.dismiss();
        toast.setMessage(error.message);
        toast.present();
      },
      () => {
        loader.dismiss();
      });
    });
  }

  //Metodo para registrar nuevo viajero
  sendRegister(user){
    //Crear componente  Loading
    const loader = this.loadingCtrl.create({
      content: "Por favor espere..."
    });
    //

    //Creacion componente toast
    const toast = this.toastCtrl.create({
      duration: 4000
    });
    //
    loader.present();//muestra el componente loading
    
    //Ejecuta la peticion http que se encuentra en el provider api-rest-traveler
    this.storage.get('token').then((token) => {
      this.apiTraveler.sendRegister(user, token)
      .subscribe((data) => {
        toast.setMessage(data["message"]);
        this.storage.set("id_user", data["id"]);
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }, 
      (error) => {
        loader.dismiss();
        toast.setMessage(error.message);
        toast.present();
      },
      () => {
        loader.dismiss();
      });
    });
    
  }//fin del metodo

  ionViewWillLeave(){
    this.storage.get('id_user').then((id) => {
      this.apiTraveler.getData(id)
      .subscribe((data) => {
        this.storage.set("datos", data[0]);
      }, 
      (error) => {
        this.navCtrl.setRoot(LoginPage);
      });
    });
  }

}
