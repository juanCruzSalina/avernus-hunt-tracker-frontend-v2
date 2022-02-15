import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

interface IObject {
  1: string[],
  2: string[],
  3: string[],
}

export interface IData {
  type: string[],
  lures: IObject,
  items: IObject,
  trophies: IObject,
  tier: string[],
}

const initialState: IData = {
  tier: ['1', '2', '3'],
  type: ['Lure', 'Trophy'],
  lures: {
    1: [`Kozakura Sashimono`,
        `Cracked Hand Mirror`,
        `Corrupted Feather`,
        `White Horn Chip`,
        `Symbol of Yeenoghu`,
        `Tendrils of Shadow`
      ],
    2: [`Mote of Infernal Hellfire`,
        `Ensorcelled Lure`,
        `Whip of Command`,
      ],
    3:[`Fragment of Raumauch's Phylactery`]}
  ,
  items: {
    1: [`Demon Hunter's Trackers`,
        `Garbs of the Cubi`,
        `Greaves of the Fallen Angel`,
        `Goristro's Horn`,
        `Balor Bracer`,
        `Whisps of the Shadow Demon`,],
    2: [`Arms of the Living Fire`,
        `Boots of the Herald`,
        `Garbs of the Herald`,
        `Crown of the Pitfiend`,
        `Ethereal Bracers of the Past`,
        `Plate of the Erinyes`,],
    3: [`Greaves of the Light Guard`,
        `Whisper's Hoods of Quiet`,
        `Arms of the Lasat Resistance`,
        `Breastplate of the Crusader`,
        `Bore Devil Ribcage`,
        `Shirt of the Hell's Interragator`,
        `Upper Pact Brands of the Inferno`,
        `Lower Pact Brands of the Blaze Bond`,
        `Helm of the Slayblazer`,]
  },
  trophies: {
    1: [`Gore-Covered Chains`,
        `Shattered Ice Fang`,
        `Tantalizing Whip`,
        `Cursed Blade of the Lonely`,
        `Fork of the Spinagon`,
        `Mask of the Hellbringers`,
        `Shattered Jaw Trap`,],
    2: [`Brooch of the Divine`,
        `Journal of Seduction`,
        `Exhausted Holy Weapon`,
        `Encircled Goristro Bracer`,
        `Leathery Hide`,
        `Shadow Demon Claw`,],
    3: [`Lantern of Infernal Hellfire`,
        `Shard of Infernal Ice`,
        `Infernal Kite Shield`,]
  },
}

export const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {}
})

export const appData = (state: RootState) => state.appData;

export default appDataSlice.reducer