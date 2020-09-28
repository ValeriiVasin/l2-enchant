import { run } from '../helpers/run';
import { Item } from '../items';

run(
  Item.Rune_1,
  [
    Item.Rune_2,
    Item.Rune_3,
    Item.Rune_4,
    Item.Rune_5,
    Item.Rune_6,
    Item.Rune_7,
    Item.Rune_8,
    Item.Rune_9,
    Item.Rune_10,
    Item.Rune_11,
    Item.Rune_12,
    Item.Rune_13,
  ],
  1000,
);

printNote();

function printNote() {
  const count = 1_000_000;
  const odals = odalCount(count);
  const ratio = (odals / count).toFixed(3);
  console.log(
    `\n* out of ${count} runes you would get ${odals} runes you want. Ratio: ${ratio}`,
  );
}

function odalCount(amount: number): number {
  // Odal in the first cell
  // total possible runes => 6
  const runes = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < amount; i++) {
    const index = Math.floor(Math.random() * 6);
    runes[index]++;
  }

  const odals = runes[0];
  // collapse runes back 2 runes = 1 not opened
  const collapsed = runes
    .slice(1)
    .reduce((acc, amount) => acc + Math.floor(amount / 2), 0);

  return collapsed === 0 ? odals : odals + odalCount(collapsed);
}
