import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'app-docs-details',
  templateUrl: './docs-details.page.html',
  styleUrls: ['./docs-details.page.scss'],
})
export class DocsDetailsPage implements OnInit {

  docsId = null;
  background: string
  title: string
  subtitle: string
  content: string

  constructor(private activatedRoute: ActivatedRoute, private docsService: DocsService) { }

  ngOnInit() {

    this.docsId = this.activatedRoute.snapshot.paramMap.get('id');

  }

  
}
