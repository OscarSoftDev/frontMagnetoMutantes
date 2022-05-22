import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estadistica } from 'src/app/model/estadistica.model';
import { Mutante } from 'src/app/model/mutante.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  digiteAdn: String = "Digite un valor";
  estadistica: Estadistica = {
    humanosAdn: 1,
    mutantesAdn: 1,
    ratio: 1
  };
  //digiteAdnSmall:String="5 letras";
  mutante: Mutante = { idMutante: 0, dna: [], mutant: false };

  existeReg:string="";

  constructor(private hhtp: HttpService) {
  }

  ngOnInit(): void {
    this.getEstadisticas();
  }

  getEstadisticas() {
    this.hhtp.getEstadistica().subscribe(estadistica => {
      console.log(estadistica);
      this.estadistica = estadistica;
    });
  }

  SaveData(form: any) {
    //console.log(form);
    this.existeReg="";
    form.value.pop;
    this.mutante.dna=[];
    this.mutante.dna.push(form.value.dna1, form.value.dna2, form.value.dna3, form.value.dna4, form.value.dna5);
    console.log(JSON.stringify(this.mutante));
    this.postMutantes(this.mutante);

    
  }

  postMutantes(mutante: Mutante) {
    this.hhtp.postMutante(mutante).subscribe(mutante =>{
      this.getEstadisticas();
      this.existeReg="";
      if(mutante.dna[0]==="ya existe ADN de este mutante/persona "){
        this.existeReg=mutante.dna[0];
      }else{
        this.existeReg="Insertado nuevo registro";
      }
    },err => {
      console.log("Error");
    });
  }

}
