import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../components/video-dialog/video-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private materialDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMaterialDialog(videoUrl: string){
    this.materialDialog.open(VideoDialogComponent,{
      data: { videoUrl: videoUrl}
    });
  }
}
