import { createContext } from 'react';

const DEFAULT_ZOOM_INDEX = 8;

export const ZOOM_VALUES = [
  25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150,
] as const;

export const DEFAULT_ZOOM_VALUE = ZOOM_VALUES[DEFAULT_ZOOM_INDEX];

export type ZOOM_VALUE = (typeof ZOOM_VALUES)[number];

type ZoomStoreData = {
  zoom: ZOOM_VALUE;

  setZoomAction(value: ZOOM_VALUE): void;
  incrementZoomAction(): void;
  decrementZoomAction(): void;
};

export const ZoomStoreContext = createContext<ZoomStoreData>({
  zoom: DEFAULT_ZOOM_VALUE,

  setZoomAction: () => undefined,
  incrementZoomAction: () => undefined,
  decrementZoomAction: () => undefined,
});

export const ZoomStoreProvider = ZoomStoreContext.Provider;
