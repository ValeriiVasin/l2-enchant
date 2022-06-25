import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// https://l2central.info/classic/events_and_promos/1136.html?lang=ru
export const eventDragonSlayerEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.EventEnchantDragonSlayer,
  chances: [100, 100, 100, ...Array(12).fill(70)],
  items: itemsRange(Item.EventDragonSlayerSword, Item.EventDragonSlayerSword_15),
});
