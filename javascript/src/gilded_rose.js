const { AGED_BRIE, BACKSTAGE_PASSES_TO_A_TAF,SULFURAS } = require("./product");
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const LIMIT_SELLIN =0;

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  increaseQuality(){
    if(this.quality < MAX_QUALITY)
      this.quality++;
  }

  decreaseQuality(){
    if(this.quality > MIN_QUALITY)
      this.quality--;
  }

  setQualityToZero(){
    this.quality = 0;
  }

  decreaseSellIn(){
    this.sellIn --;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */
updateQuality() {
  this.items.forEach((item) => {
    if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASSES_TO_A_TAF) {
      if (item.name != SULFURAS) {
        item.decreaseQuality();
      }
    } else {
      if (item.quality < MAX_QUALITY) {
        item.increaseQuality();
        if (item.name == BACKSTAGE_PASSES_TO_A_TAF) {
          if (item.sellIn < 11) {
            item.increaseQuality();
          }
          if (item.sellIn < 6) {
            item.increaseQuality();
          }
        }
      }
    }
    if (item.name != SULFURAS) {
      item.decreaseSellIn();
    }
    if (item.sellIn < LIMIT_SELLIN) {
      if (item.name != AGED_BRIE) {
        if (item.name != BACKSTAGE_PASSES_TO_A_TAF) {
          if (item.name != SULFURAS) {
            item.decreaseQuality();
          } 
        } else {
          item.setQualityToZero();
        }
      } else {
          item.increaseQuality();
      }
    }
  })
  return this.items;
}
}
module.exports = {
Item,
Shop
}
