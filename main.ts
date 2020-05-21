import { Item } from './types';
import { enchant } from './helpers/enchant';

const from = Item.Cloak;
const to = Item.Cloak_7;

console.log(enchant(from, to));
