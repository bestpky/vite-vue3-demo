import isFileLike, { FileLike } from './is-file-like';


class LoadImageError extends Error {
  constructor(message?: string, event?: Event | string) {
    super(message);
    this.event = event;
  }

  event: Event | string | undefined;
}

export default async function loadImage(url: FileLike | string, { crossOrigin } : { crossOrigin?: string } = {}) {
  let src: string;
  if (isFileLike(url)) {
    src = URL.createObjectURL(url);
  } else {
    src = url;
  }
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      const error = new LoadImageError(`load ${url} fail`, e);
      reject(error);
    };
    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }
    img.src = src;
  });
}
export { loadImage };
