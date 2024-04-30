import { TooltipClassKey } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export function hexToRgba(hex: string, opacity: number): string | undefined {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${opacity})`
    : undefined;
}

export function getColorRgb(color: string): string {
  const el = document.createElement('div');
  el.style.color = color;
  document.body.appendChild(el);
  const rgb = window.getComputedStyle(el).getPropertyValue('color');
  document.body.removeChild(el);
  return rgb;
}

export function mergeClasses(
  custom: Partial<ClassNameMap<TooltipClassKey>>,
  propClasses?: Partial<ClassNameMap<TooltipClassKey>>
): Partial<ClassNameMap<TooltipClassKey>> {
  if (!propClasses) return custom;

  const result = { ...propClasses };

  for (const key in custom) {
    result[key] = `${custom[key]} ${propClasses[key] || ''}`;
  }

  return result;
}
