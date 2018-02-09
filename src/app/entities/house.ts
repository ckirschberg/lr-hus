import { Item } from "./item";

export class House {
  public id: string;
  public name: string;
  public description?: string;
  public basePrice: number;
  public bricksInfo: BricksInfo;
  
}

export class BricksInfo {
  public totalBricksNeeded: number;
  public brickPriceStandard: number;
  public selectedBrick: Item;
  public addOnPrice: number;
}