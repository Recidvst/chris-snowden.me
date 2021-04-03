import Scrambler from 'scrambling-letters';

export function scramblerTrigger(options = {
  target: 'h1',
  random: [1750, 3000],
  speed: 100,
}) {
  Scrambler({
    ...options,
  });
}
