import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards:any = []
  cardsForHandset = []
  cardsForWeb = []

  isHandset:boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );
  

  constructor(private breakpointObserver: BreakpointObserver,
    public appService:AppService) {}

  ngOnInit(){
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    });
    this.appService.getMovies().subscribe(
      response =>{
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb = response.webCards;
        this.loadCards();
      },
      error => {
        alert('There was an error in receiveing data from the server')
      }
    );
  }
  loadCards(){
    this.cards = this.isHandset? this.cardsForHandset: this.cardsForWeb
  }

  getImage(imageName:string): string{
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg'+ ')';

  }
}
