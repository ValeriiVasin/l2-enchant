import { enchantOrDrop } from '../helpers/strategies/enchant-or-drop';
import { Item } from '../items';

export const talismanOfAuthorityEnchantMap = enchantOrDrop({
  enchantItem: Item.TalismanOfAuthorityFragment,
  chances: [70, 60, 50, 40],
  items: [
    Item.TalismanOfAuthority_1,
    Item.TalismanOfAuthority_2,
    Item.TalismanOfAuthority_3,
    Item.TalismanOfAuthority_4,
    Item.TalismanOfAuthority_5,
  ],
});

export const nobleTalismanOfAuthorityEnchantMap = enchantOrDrop({
  enchantItem: Item.TalismanOfAuthorityFragment,
  chances: [45, 35, 25, 20],
  items: [
    Item.NobleTalismanOfAuthority_1,
    Item.NobleTalismanOfAuthority_2,
    Item.NobleTalismanOfAuthority_3,
    Item.NobleTalismanOfAuthority_4,
    Item.NobleTalismanOfAuthority_5,
  ],
});

export const radiantTalismanOfAuthorityEnchantMap = enchantOrDrop({
  enchantItem: Item.TalismanOfAuthorityFragment,
  chances: [30, 25, 20, 10],
  items: [
    Item.RadiantTalismanOfAuthority_1,
    Item.RadiantTalismanOfAuthority_2,
    Item.RadiantTalismanOfAuthority_3,
    Item.RadiantTalismanOfAuthority_4,
    Item.RadiantTalismanOfAuthority_5,
  ],
});
