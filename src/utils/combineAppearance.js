export const combineAppearance = (appearance, style) => {
  let styles = style.base || "";
  appearance.split(" ").map((element) => {
    if (style?.[element]) {
      styles += ` ${style?.[element]}`;
    }
    return styles;
  });

  return styles;
};
