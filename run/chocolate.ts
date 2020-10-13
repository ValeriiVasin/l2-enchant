import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.ChocolateFigure_1,
  [
    Item.ChocolateFigure_2,
    Item.ChocolateFigure_3,
    Item.ChocolateFigure_4,
    Item.ChocolateFigure_5,
    Item.ChocolateFigure_6,
  ],
  10_000,
);
