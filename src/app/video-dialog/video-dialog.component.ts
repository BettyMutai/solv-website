import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoDialogData } from 'src/app/models/video-dialog-data.model';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css']
})
export class VideoDialogComponent implements OnInit {

  videoUrl!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private videoDialogData: VideoDialogData) { }

  ngOnInit(): void {
    this.videoUrl = this.videoDialogData.videoUrl;
  }

}
