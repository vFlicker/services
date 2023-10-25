import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { DEFAULT_ZOOM_VALUE } from './constants';
import { calculateFontSize, decrementZoom, incrementZoom } from './helpers';
import { ZoomValue } from './types';

type InitialState = {
  zoom: ZoomValue;

  setZoomAction(value: ZoomValue): void;
  incrementZoomAction(): void;
  decrementZoomAction(): void;
};

type ZoomProviderProps = PropsWithChildren;

export const ZoomContext = createContext<InitialState>({
  zoom: DEFAULT_ZOOM_VALUE,

  setZoomAction: () => undefined,
  incrementZoomAction: () => undefined,
  decrementZoomAction: () => undefined,
});

export function ZoomProvider({ children }: ZoomProviderProps): JSX.Element {
  const [zoom, setZoom] = useState<ZoomValue>(DEFAULT_ZOOM_VALUE);

  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
      const newFontSize = calculateFontSize(zoom);
      htmlElement.style.fontSize = `${newFontSize}px`;
    }
  }, [zoom]);

  const setZoomAction = (value: ZoomValue) => {
    setZoom(value);
  };

  const incrementZoomAction = () => {
    const newZoomValue = incrementZoom(zoom);
    setZoom(newZoomValue);
  };

  const decrementZoomAction = () => {
    const newZoomValue = decrementZoom(zoom);
    setZoom(newZoomValue);
  };
  return (
    <ZoomContext.Provider
      value={{ zoom, setZoomAction, incrementZoomAction, decrementZoomAction }}
    >
      {children}
    </ZoomContext.Provider>
  );
}
