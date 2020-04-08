import { Component, OnInit } from '@angular/core';
import { MatkulService } from '../matkul.service';
import { Matkul } from '../matkul';

@Component({
  selector: 'app-main-matkul',
  templateUrl: './main-matkul.component.html',
  styleUrls: ['./main-matkul.component.scss']
})
export class MainMatkulComponent implements OnInit {
  datamatkul: Matkul[];
  error: boolean;
  displayedColumns: string[] = ['namamatkul', 'semester', 'hari', 'dosen', 'tahun'];
  
  constructor(private ms: MatkulService) { }

  ngOnInit(): void {
    this.ms.getMatkul().subscribe(
      respond => { this.datamatkul = respond as Matkul[]; },
      err => { console.log(err); 
      this.error = true; }
    )
  }
}
