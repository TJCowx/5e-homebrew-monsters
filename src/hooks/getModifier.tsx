/**
 * To calculate the modifier, you must subtract by 10 because 10's modifier is 0
 * then round down any decimal numbers
 * @param stat the stat to get the modifier for
 */
export const getModifier = (stat: string): number => {
  if (Number(stat) != NaN) {
    return Math.floor((Number(stat) - 10) / 2);
  } else {
    return 0;
  }
};

/**
 * Gets the modifier with the + or - to display
 * @param stat the stat to get the modifier
 */
export const getDisplayModifier = (stat: string): string => {
  const mod: number = getModifier(stat);

  if (mod >= 0) {
    return `+${mod}`;
  } else {
    return `${mod}`;
  }
};
