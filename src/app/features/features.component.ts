import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi-cup-hot',
      title: 'Premium Coffee',
      description: 'Freshly roasted beans from the best regions'
    },
    {
      icon: 'bi-clock',
      title: 'Always Fresh',
      description: 'Daily baked pastries and desserts'
    },
    {
      icon: 'bi-heart',
      title: 'Cozy Atmosphere',
      description: 'Perfect place to relax and work'
    }
  ];
}