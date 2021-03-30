
export function scramblerTrigger(target) {
  if (!target) return false;

  Scrambler({
    target: "h1",
    random: [1750, 3000],
    speed: 100
  });
}
