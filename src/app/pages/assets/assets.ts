import { Component, signal } from '@angular/core';
import { AssetCard } from '../../components/asset-card/asset-card';

@Component({
  selector: 'app-assets',
  imports: [AssetCard],
  templateUrl: './assets.html',
  styleUrl: './assets.css',
})
export class Assets {
  sortValue = signal(0)
}
