import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.EventDragonSlayerSword, itemsRange(Item.EventDragonSlayerSword_7, Item.EventDragonSlayerSword_17), 100_000);
