import { getMatcher } from "./utils";

type Options = {
  minWidth?: number | string;
  maxWidth?: number | string;
} & (
  | {
      minWidth: number | string;
    }
  | {
      maxWidth: number | string;
    }
);

/**
 *
 * @param {Options} options Min and max width
 * @param {number|string} options.minWidth Min width
 * @param {number|string} options.maxWidth Max width
 * @returns Min and max width
 */
function kueri(options: Options): Options {
  const AVALIABLE_OPTIONS = ["minWidth", "maxWidth"];
  if (
    typeof options !== "object" ||
    Object.keys(options).every((key) => !AVALIABLE_OPTIONS.includes(key))
  ) {
    throw new Error("Invalid options");
  }

  return new Proxy(options, {
    get: (target, key: string) => {
      return target[key]
        ? window.matchMedia(getMatcher(key, target[key]))
        : false;
    },
  });
}

export default kueri;
