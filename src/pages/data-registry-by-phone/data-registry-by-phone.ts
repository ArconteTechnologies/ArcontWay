import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  LoadingController,
  ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

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
    second_lastname: "null",
    lada: "null",
    number_phone: "",
    email: "null",
    password: "null",
    card: "0",
    type_card: "null",
    points: "0",
    total_trips: "0",
    login_with: "PH"
  };//

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiUser: UserProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
     private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataRegistryByPhonePage');
  }

  showData(){
    this.storage.get('token').then((val) => {
      console.log('tu token es: ', val);
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
      this.apiUser.sendRegiste(user, token)
      .subscribe((data) => {
        toast.setMessage(data["message"]);
        toast.present();
      }, 
      (error) => {
        loader.dismiss();
        toast.setMessage(error.message);
        toast.present();
      },
      () => {
        loader.dismiss();
        console.log("sucess");
      });
    });
    
    
    /*console.log(user.name);
    this.storage.get('token').then((val) => {
      token = val;
      return val;
      
    });
    console.log(token); 
    */
  }//fin del metodo

}
