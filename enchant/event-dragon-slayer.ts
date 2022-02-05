import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/events_and_promos/1136.html?lang=ru
const chances = [100, 100, 100, ...Array(12).fill(70)];
const items = [
  Item.EventDragonSlayerSword,
  Item.EventDragonSlayerSword_1,
  Item.EventDragonSlayerSword_2,
  Item.EventDragonSlayerSword_3,
  Item.EventDragonSlayerSword_4,
  Item.EventDragonSlayerSword_5,
  Item.EventDragonSlayerSword_6,
  Item.EventDragonSlayerSword_7,
  Item.EventDragonSlayerSword_8,
  Item.EventDragonSlayerSword_9,
  Item.EventDragonSlayerSword_10,
  Item.EventDragonSlayerSword_11,
  Item.EventDragonSlayerSword_12,
  Item.EventDragonSlayerSword_13,
  Item.EventDragonSlayerSword_14,
  Item.EventDragonSlayerSword_15,
];

export const eventDragonSlayerEnchantMap = createEnchantMap({
  items,
  chances,
  enchantItem: Item.EventEnchantDragonSlayer,
  strategy: EnchantStrategy.Destroy,
});
