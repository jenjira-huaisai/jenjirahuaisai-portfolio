import type { StaticImageData } from 'next/image';

/*
 * Round (1:1) flag SVGs from the flag-icons package (MIT licence).
 * Importing each file directly means only these 10 flags are bundled,
 * not all 270 that come with the package.
 * To add a country: import its flag here and add it to data/about.ts.
 */
import be from 'flag-icons/flags/1x1/be.svg';
import de from 'flag-icons/flags/1x1/de.svg';
import jp from 'flag-icons/flags/1x1/jp.svg';
import la from 'flag-icons/flags/1x1/la.svg';
import mm from 'flag-icons/flags/1x1/mm.svg';
import nl from 'flag-icons/flags/1x1/nl.svg';
import pt from 'flag-icons/flags/1x1/pt.svg';
import qa from 'flag-icons/flags/1x1/qa.svg';
import sg from 'flag-icons/flags/1x1/sg.svg';
import th from 'flag-icons/flags/1x1/th.svg';

export const FLAGS: Record<string, StaticImageData> = {
  be,
  de,
  jp,
  la,
  mm,
  nl,
  pt,
  qa,
  sg,
  th,
};