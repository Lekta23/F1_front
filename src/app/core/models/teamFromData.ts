import { Team } from "./team";

export interface teamFromData {
    isUpdateMode: boolean;
    teamToUpdate?: Team;
    idToCreate?: number;
  }