import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.Agathion,
  [
    Item.Agathion_4,
    Item.Agathion_5,
    Item.Agathion_6,
    Item.Agathion_7,
    Item.Agathion_8,
    Item.Agathion_9,
    Item.Agathion_10,
  ],
  1_000_000,
);

run(Item.Agathion_10, [Item.HighQualityAgathion], 1);

run(
  Item.HighQualityAgathion,
  [
    Item.HighQualityAgathion_1,
    Item.HighQualityAgathion_2,
    Item.HighQualityAgathion_3,
    Item.HighQualityAgathion_4,
    Item.HighQualityAgathion_5,
    Item.HighQualityAgathion_6,
    Item.HighQualityAgathion_7,
    Item.HighQualityAgathion_8,
    Item.HighQualityAgathion_9,
    Item.HighQualityAgathion_10,
  ],
  1_000_000,
);
