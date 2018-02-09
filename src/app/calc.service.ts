import { Injectable } from '@angular/core';
import { Item } from './entities/item';
import { House } from './entities/house';

@Injectable()
export class CalcService {

  constructor() { }

  public bricksPrice(brick: Item, house: House): number {
    // (bricks price - brickStandardPrice) * house's totalBricksNeeded.
    return (brick.price - house.bricksInfo.brickPriceStandard) * house.bricksInfo.totalBricksNeeded; 
  }

}
