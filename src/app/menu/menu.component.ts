import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedCategory = 'All';
  categories = ['All', 'Drinks', 'Desserts'];

  menuItems = [
    { name: 'Espresso', description: 'Strong and bold', price: '3.50', category: 'Drinks', image: 'assets/image/espr.png' },
    { name: 'Cappuccino', description: 'Rich and creamy', price: '4.50', category: 'Drinks', image: 'assets/image/cappu.png' },
    { name: 'Iced Coffee', description: 'Cool and refreshing', price: '8.00', category: 'Drinks', image: 'assets/image/icecoffee.png' },
    { name: 'Frappuccino', description: 'Sweet and blended', price: '8.00', category: 'Drinks', image: 'assets/image/frap.png' },
    { name: 'Chocolate Cake', description: 'Moist and delicious', price: '8.00', category: 'Desserts', image: 'assets/image/choc.png' },
    { name: 'Croissant', description: 'Flaky and warm', price: '4.00', category: 'Desserts', image: 'assets/image/croi.png' },
    { name: 'Pancakes', description: 'Soft and fluffy', price: '7.50', category: 'Desserts', image: 'assets/image/pan.png' },
    { name: 'Cinnamon Rolls', description: 'Flaky and warm', price: '6.50', category: 'Desserts', image: 'assets/image/spi.png' },
  ];

  getFilteredItems() {
    if (this.selectedCategory === 'All') return this.menuItems;
    return this.menuItems.filter(i => i.category === this.selectedCategory);
  }
}