import { Item } from './types';
import { enchant } from './helpers/enchant';

const from = Item.FerritCloak;
const to = Item.FerritCloakE7;

console.log(enchant(from, to));
