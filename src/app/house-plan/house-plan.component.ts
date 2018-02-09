import { CalcService } from './../calc.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { House } from '../entities/house';
// import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-house-plan',
  templateUrl: './house-plan.component.html',
  styleUrls: ['./house-plan.component.scss']
})
export class HousePlanComponent implements OnInit {
  panelOpenState: boolean = false;
  step = -1;
  private house: House = 
  { id:'1', name: 'Christian og Michelles hus på Triumfbuen 17 Hillerød', 
  basePrice: 3125612,
    bricksInfo: {
      totalBricksNeeded: 12540, 
      brickPriceStandard: 6.5, 
      selectedBrick: undefined,
      addOnPrice: 0
    } 
  };
  private bricks: Item[] = [
    { _id: '1', standard: true, brand: 'Randers Tegl', name: 'Prima Umbra', model: 'RT 476', price: 6.5, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-476/RT476_oversigt.jpg', description: 'Sandfarvet blødstrøget ensfarvet sten og 4 facader.'  },
    { _id: '2', standard: false, brand: 'Randers Tegl', name: 'Prima Lucca', model: 'RT 102', price: 7.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-102/RT102_oversigt.jpg', description:'Gul blødstrøget sten med hvidlig engobe.'  },
    { _id: '3', standard: true, brand: 'Randers Tegl', name: 'Prima Lava', model: 'RT 476', price: 6.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-434/RT434_oversigt.jpg'  },
    { _id: '4', standard: false, brand: 'Randers Tegl', name: 'Prima Bari', model: 'RT 475', price: 7.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-475/RT475_oversigt.jpg'  },
    { _id: '5', standard: false, brand: 'Randers Tegl', name: 'Unika Delfi grådæmpet', model: 'RT 517', price: 14, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-517/RT517_oversigt.jpg', description: 'Grådæmpet blødstrøget sten med 4 facader. Den specielle farve opnås ved brænding 2 gange. Farven er gennemgående.'  },
  ]

  constructor(private calc: CalcService) {

  }

  ngOnInit() {
  }

  setStep(index: number) {
    console.log(index);
    this.step = index;
  }
  
  calcBricks(brick: Item): number {
    return this.calc.bricksPrice(brick, this.house);
  }
  selectBrick(brick: Item) {
    this.house.bricksInfo.selectedBrick = brick;
    this.step = 1;
    this.house.bricksInfo.addOnPrice = this.calcBricks(brick);
  }

}
