import { enchant } from '../helpers/enchant';
import { header } from '../helpers/header';
import { Item } from '../items';

const times = 10_000;

console.log(header('Талисман Адена +0 => +1'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_1, times));
console.log(header('Талисман Адена +0 => +2'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_2, times));
console.log(header('Талисман Адена +0 => +3'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_3, times));
console.log(header('Талисман Адена +0 => +4'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_4, times));
console.log(header('Талисман Адена +0 => +5'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_5, times));
console.log(header('Талисман Адена +0 => +6'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_6, times));
console.log(header('Талисман Адена +0 => +7'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_7, times));
console.log(header('Талисман Адена +0 => +8'));
console.log(enchant(Item.TalismanOfAden, Item.TalismanOfAden_8, times));
