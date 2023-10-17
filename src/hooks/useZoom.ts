import { useEffect, useState } from 'react';

import {
  calculateFontSize,
  decrementZoom,
  DEFAULT_ZOOM_VALUE,
  incrementZoom,
  ZOOM_VALUE,
} from '~/stores';

export const useZoom = () => {
  const [zoom, setZoom] = useState<ZOOM_VALUE>(DEFAULT_ZOOM_VALUE);

  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
      const newFontSize = calculateFontSize(zoom);
      htmlElement.style.fontSize = `${newFontSize}px`;
    }
  }, [zoom]);

  const setZoomAction = (value: ZOOM_VALUE) => {
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

  return { zoom, setZoomAction, incrementZoomAction, decrementZoomAction };
};
