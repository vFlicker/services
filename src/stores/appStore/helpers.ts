import { ZOOM_VALUE, ZOOM_VALUES } from './appStoreContext';

const DEFAULT_FONT_SIZE = 10;

/**
 * Calculates the font size based on the zoom value.
 */
export const calculateFontSize = (zoom: ZOOM_VALUE): number => {
  return DEFAULT_FONT_SIZE * (zoom / 100);
};

/**
 * Increases the zoom value by one step according to the list of possible zoom values.
 */
export const incrementZoom = (zoom: ZOOM_VALUE): ZOOM_VALUE => {
  const index = ZOOM_VALUES.indexOf(zoom);
  const updatedIndex = index + 1;

  if (index !== -1 && updatedIndex < ZOOM_VALUES.length) {
    return ZOOM_VALUES[updatedIndex];
  }

  return zoom;
};

/**
 * Decreases the zoom value by one step according to the list of possible zoom values.
 */
export const decrementZoom = (zoom: ZOOM_VALUE): ZOOM_VALUE => {
  const index = ZOOM_VALUES.indexOf(zoom);
  const updatedIndex = index - 1;

  if (index !== -1 && updatedIndex >= 0) {
    return ZOOM_VALUES[updatedIndex];
  }

  return zoom;
};
