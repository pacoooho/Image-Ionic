import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private file: File,
    private imageResizer: ImageResizer,
    private fileOpener: FileOpener,
    private base64: Base64
  ) {
    console.log(this.file.externalApplicationStorageDirectory);
    console.log(this.file.externalCacheDirectory);
    console.log(this.file.externalDataDirectory);
    console.log(`${this.file.externalRootDirectory}DCIM/Camera/IMG_20201028_093945.jpg`);

    console.log(this.file.applicationDirectory);
    console.log(this.file.applicationStorageDirectory);
    console.log(this.file.cacheDirectory);
    console.log(this.file.dataDirectory);

  }

  onClick2(){

        this.base64.encodeFile(`file:///storage/emulated/0/DCIM/Camera/IMG_20201028_093945.jpg`)
          .then(res => {


  let options = {
        uri: res,
         quality: 90,
        width: 1280,
        height: 1280
       } as ImageResizerOptions;

        console.log(options.uri+options.folderName);

       this.imageResizer
         .resize(options)
         .then((filePath: string) => {
           console.log('FilePath', filePath);
           this.escribirArchivo(res)
        })
         .catch(e => console.log("e  ",e));

            console.log("encodeFile ", res);
          })
          .catch(e => {
            console.log(e); 
          })
  }


  async crearArchivoFisico(text: string) {
    console.log('crearArchivoFisico ');

   await this.file.checkFile(this.file.externalRootDirectory, 'photo.jpg')
      .then(existe => {
        console.log('Existe archivo? ', existe);
        return this.escribirArchivo(text);

      })
      .catch(e => {
        return this.file.createFile(this.file.externalRootDirectory, 'photo.jpg', false)
          .then(creado => {
            console.log('creado archivo ', creado);

            this.escribirArchivo(text);
          })
          .catch(e2 => {
            console.log(e2);
            console.log("e2  ",e2);
          })
      });
  }

  async escribirArchivo(text: string) {
    console.log('escribirArchivo ');

    await this.file.writeExistingFile(this.file.externalRootDirectory, 'photo.jpg', text)
    .then(creado => {
      console.log('escribirArchivo creado archivo ', creado);

      
    })
    .catch(e2 => {
      
      console.log("escribirArchivo e2  ",e2);
    });
    // console.log('archivo creado');
    
  }  


  onClick() {
console.log("onClick");
    this.file.checkFile(`${this.file.externalRootDirectory}DCIM/Camera/`, 'IMG_20201028_093945.jpg')
      .then(existe => {
        console.log('Existe archivo? ', existe);
        // return this.escribirArchivo(text);
        this.file.readAsArrayBuffer(`${this.file.externalRootDirectory}DCIM/Camera/`, 'IMG_20201028_093945.jpg')
          .then(res => {
            console.log("readAsText", res);
          })
          .catch(e => {
            console.log(e);
          })
      })
      .catch(e => {
        console.log("error", e);
      });


    //   let options = {
    //     uri: `${this.file.externalRootDirectory}DCIM/Camera/`,
    //     folderName: 'IMG_20201028_093945',
    //     quality: 90,
    //     width: 1280,
    //     height: 1280
    //    } as ImageResizerOptions;

    //     console.log(options.uri);

    //    this.imageResizer
    //      .resize(options)
    //      .then((filePath: string) => console.log('FilePath', filePath))
    //      .catch(e => console.log("e  ",e));
  } 
  onClick3(){
    console.log("3 ");
         let options = {
        uri: `${this.file.externalRootDirectory}DCIM/Camera/`,
        folderName: 'IMG_20201028_093945.jpg',
        quality: 90,
        width: 1280,
        height: 1280
       } as ImageResizerOptions;

        console.log(options.uri+options.folderName);
const fileResizer = new File();
       this.imageResizer
         .resize(options)
         .then((filePath: string) =>{ 
           console.log('FilePath', filePath);
            
           this.crearArchivoFisico(filePath);
        })
         .catch(e => console.log("e  ",e));
  }

}
