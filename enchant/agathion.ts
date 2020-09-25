import { Item } from '../items';
import { Enchant, EnchantMap } from '../types';

const chances = [100, 100, 100, 65, 50, 35, 12, 9, 7, 4];
const items = [
  Item.Agathion,
  Item.Agathion_1,
  Item.Agathion_2,
  Item.Agathion_3,
  Item.Agathion_4,
  Item.Agathion_5,
  Item.Agathion_6,
  Item.Agathion_7,
  Item.Agathion_8,
  Item.Agathion_9,
  Item.Agathion_10,
];

export const agathionEnchantMap: EnchantMap = new Map(
  items.slice(0, -1).map((item, index): [Item, Enchant] => {
    return [
      item,
      {
        item,
        required: Item.AgathionEnchantScroll,
        success: items[index + 1],
        fail: Item.Nothing,
        successRate: chances[index],
      },
    ];
  })
);
