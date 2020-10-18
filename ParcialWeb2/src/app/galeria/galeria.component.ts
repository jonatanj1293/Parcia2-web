import { Component, OnInit } from '@angular/core';
import { ServiceImagenService } from '../service-imagen.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imageslist = [];

  constructor(private service:ServiceImagenService ) { }

  ngOnInit(): void {
    this.listImages();
  }

  listImages() {
    this.service.listImages().subscribe((res:any)=>{
      console.log(res);
      this.imageslist = res;
    });
  }

}
