import { Pilot } from "./pilot";

export interface pilotFromData {
    pilotToUpdate?: Pilot;
    isUpdateMode: boolean;
    idToCreate?: number;
  }