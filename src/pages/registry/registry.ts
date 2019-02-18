import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  LoadingController,
  ToastController  } from 'ionic-angular';
import { TravelerProvider } from '../../providers/traveler/traveler';
import {LoginPage} from '../login/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';


/**
 * Generated class for the RegistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html',
})
export class RegistryPage {
  //creacion del FORM
  registryForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    lada: new FormControl('', Validators.required),
    number_phone: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)])
  
  });
  

  //Creacion de Objeto traveler 
  public traveler = {
    id_user: "null",
    name: "",
    lastname: "",
    second_lastname: "null",
    lada: "",
    number_phone: "",
    email: "",
    password: "",
    card: "",
    type_card: "",
    points: "0",
    total_trips: "0"
  };//

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiTaveler: TravelerProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {}
  
  ionViewDidLoad(){
   
  }

  /*Metodo para registrar nuevo viajero
  sendRegister(traveler){
    
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
    this.apiTaveler.sendRegister(traveler)
     .subscribe((data) => {
        toast.setMessage(data["message"]);
        toast.present();
    }, (error) => {
        loader.dismiss();
        toast.setMessage("Ups, Vefique su conexion a internet");
        toast.present();
    },
    () => {
      loader.dismiss();
      this.navCtrl.push(LoginPage);
    });//
    
  }//fin del metodo

  launchHomePage(){
    this.navCtrl.push(LoginPage);
  }*/
  
}
