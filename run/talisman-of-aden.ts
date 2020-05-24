import { header } from '../helpers/header';
import { enchant } from '../helpers/enchant';
import { Item } from '../types';

console.log(header('Талисман Адена +0 => +4'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_4, 1000));
console.log(header('Талисман Адена +0 => +5'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_5, 1000));
console.log(header('Талисман Адена +0 => +6'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_6, 1000));
console.log(header('Талисман Адена +0 => +7'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_7, 1000));
console.log(header('Талисман Адена +0 => +8'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_8, 1000));
