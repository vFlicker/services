import { DEFAULT_FONT_SIZE, ZOOM_VALUES } from './constants';
import { ZoomValue } from './types';

export const calculateFontSize = (zoom: ZoomValue): number => {
  return DEFAULT_FONT_SIZE * (zoom / 100);
};

export const incrementZoom = (zoom: ZoomValue): ZoomValue => {
  const index = ZOOM_VALUES.indexOf(zoom);
  const updatedIndex = index + 1;

  if (index !== -1 && updatedIndex < ZOOM_VALUES.length) {
    return ZOOM_VALUES[updatedIndex];
  }

  return zoom;
};

export const decrementZoom = (zoom: ZoomValue): ZoomValue => {
  const index = ZOOM_VALUES.indexOf(zoom);
  const updatedIndex = index - 1;

  if (index !== -1 && updatedIndex >= 0) {
    return ZOOM_VALUES[updatedIndex];
  }

  return zoom;
};
