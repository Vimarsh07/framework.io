import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemRef: AngularFireObject<any>;

    name;
    vision;
    description;
    mission;
    address;
    phone;
    phone2;
    facebook;
    twitter;
    instagram;
    email;
    website;
    youtube;
    linkedin;
    video;
    causes;
    activities;
    volunteer;
    matters;
    ref;

 
  

  constructor(public navCtrl: NavController,public db:AngularFireDatabase ) {

    this.itemRef = db.object('NGO');
    this.ref = this.db.database.ref('/NGO');
  }

  add(addname,addvision,addmission,adddescription,addaddress,addphone,addphone2,addfacebook,addtwitter,addinstagram,addemail,
    addwebsite,addyoutube,addlinkedin,addvideo,addcauses,addactivities,addvolunteer,addmatters){
    this.ref.push({ name: addname, vision: addvision, mission: addmission, description: adddescription, address: addaddress, 
      phone: addphone, phone2: addphone2, facebook: addfacebook, twitter: addtwitter, instagram: addinstagram, 
      email: addemail, website: addwebsite, youtube: addyoutube, linkedin: addlinkedin, video: addvideo, causes: addcauses,
    activities: addactivities, volunteer: addvolunteer, matters: addmatters  })
    .then(() =>{ this.name = ""; addname =""; this.vision = ""; addvision =""; this.mission = ""; addmission =""; 
    this.description = ""; adddescription =""; this.address = ""; addaddress =""; this.phone = ""; addphone="";
this.phone2=""; addphone2=""; this.facebook=""; addfacebook=""; this.twitter=""; addtwitter=""; this.instagram=""; addinstagram="";
 this.email=""; addemail=""; this.website=""; addwebsite=""; this.youtube=""; addyoutube=""; this.linkedin=""; addlinkedin="";
this.video=""; addvideo=""; this.causes=""; addcauses=""; this.activities=""; addactivities=""; this.volunteer=""; addvolunteer="";
this.matters=""; addmatters="";}) 
  }



}


