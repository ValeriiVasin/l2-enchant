import { itemsRange } from '../helpers/items-range';
import { run } from '../helpers/run';
import { Item } from '../items';

run(Item.ChocolateFigure_1, itemsRange(Item.ChocolateFigure_2, Item.ChocolateFigure_15), 100_000);
