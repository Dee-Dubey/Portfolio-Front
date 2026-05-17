import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
  scroll(id: string){
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
  }
}
