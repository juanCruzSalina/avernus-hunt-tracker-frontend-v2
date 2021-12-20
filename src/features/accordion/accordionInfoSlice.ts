import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

export interface IAccordionInfo {
  type: string[],
  tier: number[]
  gear: Object,
  trophy: Object,
  lure: Object
}

const initialState: IAccordionInfo = {
  type: ['lure', 'trophy'],
  tier: [1, 2, 3],
  gear: {
    1: [
      `Garbs of the Cubi`,
      `Greaves of the Fallen Angel`,
      `Goristro's Horn`,
      `Balor Bracer`,
      `Whisps of the Shadow Demon`,
      `Demon Hunter's Trackers`,
      ],
    2: [
      `Arms of the Living Fire`,
      `Boots of the Herald`,
      `Garbs of the Herald`,
      `Crown of the Pitfiend`,
      `Ethereal Bracers of the Past`,
      `Plate of the Erinyes`,
    ],
    3: [
      `Greaves of the Light Guard`,
      `Helm of the Slayblazer`,
      `Whisper's Hoods of Quiet`,
      `Arms of the Lasat Resistance`,
      `Breastplate of the Crusader`,
      `Bore Devil Ribcage`,
      `Shirt of the Hell's Interragator`,
      `Upper Pact Brands of the Inferno`,
      `Lower Pact Brands of the Blaze Bond`,
    ]
  },
  trophy: {
    1: [
      `Gore-Covered Chains`,
      `Shattered Ice Fang`,
      `Tantalizing Whip`,
      `Cursed Blade of the Lonely`,
      `Fork of the Spinagon`,
      `Mask of the Hellbringers`,
      `Shattered Jaw Trap`,
    ],
    2: [
      `Brooch of the Divine`,
      `Journal of Seduction`,
      `Exhausted Holy Weapon`,
      `Encircled Goristro Bracer`,
      `Leathery Hide`,
      `Shadow Demon Claw`,
    ],
    3: [
      `Lantern of Infernal Hellfire`,
      `Shard of Infernal Ice`,
      `Infernal Kite Shield`,
    ]
  },
  lure: {
    1: [
      `Kozakura Sashimono`,
      `Cracked Hand Mirror`,
      `Corrupted Feather`,
      `White Horn Chip`,
      `Symbol of Yeenoghu`,
      `Tendrils of Shadow`,
    ],
    2: [
      `Mote of Infernal Hellfire`,
      `Ensorcelled Lure`,
      `Whip of Command`,
    ],
    3: [`Fragment of Raumauch's Phylactery`]
  }
}

export const accordionInfoSlice = createSlice({
  name:'accordionInfo',
  initialState,
  reducers: {
  }
})

export const accordionOptions = (state: RootState) => state.accordionInfo;

export default accordionInfoSlice.reducer