import { Component } from '@angular/core';
 import {ImageResizerOptions,ImageResizer} from '@ionic-native/image-resizer/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   
  photoSelected: string | ArrayBuffer;
  file: File;
typeForm: any;

photoSelected2: string | ArrayBuffer;

name:string="paco";
placeholder:string="Photo's Title";
   constructor(
    private imageResizer: ImageResizer,

    ) {
    setInterval(() => {
      console.log("paco");
    }, 1000);
  }
  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement){
console.log(title.value, description.value);
console.log(this.file);
 
  }

  onPhotoSelected(event){
    console.log("onPhotoSelected ");
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader(); 
   
      reader.onload = e => {
        this.photoSelected = reader.result;
      console.log(this.photoSelected);
      let options = {
        uri: this.photoSelected,
         quality: 90,
        width: 1280,
        height: 1280 
       } as ImageResizerOptions;

      const fileresizer = this.imageResizer.resize(options)
      .then((filePath: string) => {
        console.log('FilePath', filePath);
         
     })
      .catch(e => console.log("e  ",e));
console.log(fileresizer);
    }
     

      reader.readAsDataURL(this.file);
      console.log(this.file);
      const ext: String = this.file.name.split(".")[1]
      if ( ext === "png" ||  ext === "jpg") {
        this.typeForm= "png";
      } else 
      if (ext ==="mp4"){
        this.typeForm="mp4";
      }  
      console.log(this.typeForm);
    }
  }
}
