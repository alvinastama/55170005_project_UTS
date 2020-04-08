import { Component, OnInit } from '@angular/core';
import { MatkulService } from '../matkul.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Matkul } from '../matkul';

@Component({
  selector: 'app-matkul-form',
  templateUrl: './matkul-form.component.html',
  styleUrls: ['./matkul-form.component.scss']
})
export class MatkulFormComponent implements OnInit {
  matkul: Matkul = {
    _id: '',
    namamatkul: '',
    semester: 'Ganjil',
    hari: '',
    dosen: '',
    tahun: ''
  };

  id = null;
  error = false;
  update = true;

  constructor(
    private ms: MatkulService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      parameter => {
        if (parameter.get('id')){
          this.id = parameter.get('id');
          this.ms.getDatamatkul(this.id).subscribe(
            respond => {
              this.matkul = respond as Matkul;
            }, err => {
              console.log(err);
              this.error = true;
            }
          );
        }else{
          this.update = false;
        }
      });
  }

  postMatkul(){
    this.ms.postMatkul(this.matkul).subscribe(
      respond => { this.router.navigate(['/main']); }
    )
  }

  deleteMatkul(){
    this.ms.deleteMatkul(this.matkul).subscribe(
      respond => { this.router.navigate(['/main']); },
      err => { console.log(err); }
    );
  }
  
  updateMatkul(){
    this.ms.updateMatkul(this.matkul).subscribe(
      respond => { this.router.navigate(['/main']); },
      err => { console.log(err); }
    );
  }

}
