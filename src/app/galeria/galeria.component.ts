import { Component, OnInit } from '@angular/core';
import { ServiceImagenService } from '../service-imagen.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imageslist = [];
  imageListView = [];
  //Variables de Paginación
  Length = 0;
  PageSize = 10;
  filter = '';
  constructor(private service:ServiceImagenService ) { }

  ngOnInit(): void {
    this.listImages();
  }

  listImages() {
    this.service.listImages().subscribe((res: any) => {
      console.log(res);
      this.imageslist = res;
      /* Se insertan las primeras imagenes a mostrar*/
      for (let i = 0; i < this.PageSize; i++){
        this.imageListView.push(this.imageslist[i]);
      }
      this.Length = this.imageslist.length;
    });
  }

  openLink(UrlImage) {
    window.open(UrlImage, '_blank');
  }

  changePage(e) {
    this.PageSize = e.pageSize;
    this.imageListView = [];
    for (let i = this.PageSize * e.pageIndex; i < this.PageSize * (e.pageIndex + 1); i++){
      this.imageListView.push(this.imageslist[i]);
    }
  }
  getfilter(){
    if(this.filter){
      this.service.listImages().subscribe((res: any) => {
        console.log(res);
        this.imageslist = res.filter(item => item.author == this.filter);
        /* Se insertan las primeras imagenes a mostrar*/
        for (let i = 0; i < this.PageSize; i++){
          this.imageListView.push(this.imageslist[i]);
        }
        this.Length = this.imageslist.length;
      });
    }

  }
}
