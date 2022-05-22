import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { Mutante } from 'src/app/model/mutante.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mutante',
  templateUrl: './mutante.component.html',
  styleUrls: ['./mutante.component.css']
})
export class MutanteComponent implements OnInit {

  
  /*digiteAdn:String="5 letras";
  mutante:Mutante={idMutante:0,dna:['','','','',''],isMutant:false};*/

  constructor(private http:HttpService) {
    //this.digiteAdn="Digite un valor";
  }

  ngOnInit(): void {
  }
  /*SaveData(form: any) {
    console.log(form);
    this.mutante.dna.push(form.value.dna1,form.value.dna2,form.value.dna3,form.value.dna4,form.value.dna5);
    console.log(JSON.stringify(this.mutante));
   // this.postMutantes(this.mutante);
    this.getEstadistica();
  }

  postMutantes(mutante:Mutante){

    this.http.postMutante(mutante).subscribe(mutante =>{
     // console.log(mutante);
    }
    );
  }
  getEstadistica(){
    this.http.getEstadistica().subscribe(x =>{
      console.log(x);
     })
  }
*/
}
