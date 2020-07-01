import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cervejas = [
    { "name": "Heineken", "rating": "3.1", "rating_count": "(816)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/e0/9d/cb/579_Heineken_1277498982.jpg" }, 
    { "name": "Hoegaarden", "rating": "3.7", "rating_count": "(608)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/86/f0/d5/43_HoegaardenWitbierGB_1291994767.jpg" }, 
    { "name": "Colorado Indica", "rating": "3.8", "rating_count": "(599)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/e3/c1/70/154_ColoradoIndica_1277311434.jpg" }, 
    { "name": "Leffe Blonde", "rating": "3.8", "rating_count": "(589)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/c4/10/84/530_LeffeBlonde_1277397880.jpg" }, 
    { "name": "Stella Artois", "rating": "2.9", "rating_count": "(546)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/45/2b/2e/293_StellaArtois_1288102364.jpg" }, 
    { "name": "Eisenbahn Strong Golden Ale", "rating": "3.6", "rating_count": "(506)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/79/e2/3e/120_EisenbahnStrongGoldenAle_1277305161.jpg" }, 
    { "name": "Colorado Demoiselle", "rating": "3.7", "rating_count": "(486)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/64/e2/7c/156_ColoradoDemoiselle_1277311604.jpg" }, 
    { "name": "Eisenbahn Dunkel", "rating": "3.3", "rating_count": "(475)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/a2/9f/b8/105_EisenbahnDunkel_1287426838.jpg" }, 
    { "name": "Colorado Appia", "rating": "3.2", "rating_count": "(460)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/c5/6d/3b/157_ColoradoAppia_1277311797.jpg" }, 
    { "name": "Guinness Draught", "rating": "3.6", "rating_count": "(459)", "photoURL": "https://www.brejas.com.br/media/reviews/photos/thumbnail/120x120c/73/f9/42/248_guinness-1357330251.jpg" }
  ]

  constructor() { }

}
