import { run } from '../helpers/run';
import { Item } from '../items';

/**
https://dev.l2central.info/classic/events/229.html?lang=ru
$ npx ts-node run/chocolate.ts
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.2 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 2 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.3 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 6 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.4 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 17 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.5 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 51 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.6 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 171 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.7 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 174 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.8 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 179 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.9 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 199 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.10 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 277 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.11 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 706 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.12 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 711 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.13 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 733 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.14 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 926 }
Шоколадная Фигурка Ур.1 => Шоколадная Фигурка Ур.15 Map { 'Шоколадная Фигурка Ур.1' => 1, 'Шоколад' => 3851 }
*/

run(
  Item.ChocolateFigure_1,
  [
    Item.ChocolateFigure_2,
    Item.ChocolateFigure_3,
    Item.ChocolateFigure_4,
    Item.ChocolateFigure_5,
    Item.ChocolateFigure_6,
    Item.ChocolateFigure_7,
    Item.ChocolateFigure_8,
    Item.ChocolateFigure_9,
    Item.ChocolateFigure_10,
    Item.ChocolateFigure_11,
    Item.ChocolateFigure_12,
    Item.ChocolateFigure_13,
    Item.ChocolateFigure_14,
    Item.ChocolateFigure_15,
  ],
  100_000,
);
