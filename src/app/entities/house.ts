import { Item } from "./item";

export class House {
  public id: string;
  public name: string;
  public description?: string;
  public basePrice: number;
  public bricksInfo: BricksInfo;
  public woodFloorInfo: WoodFloorInfo;
}

export class BricksInfo {
  public totalBricksNeeded: number;
  public brickPriceStandard: number;
  public selectedBrick: Item;
  public addOnPrice: number;
}

export class WoodFloorInfo {
  public totalWoodFloorsNeeded: number; //m2
  public woodFloorsPriceStandard: number;
  public selectedWoodFloor: Item;
  public addOnPrice: number;
}