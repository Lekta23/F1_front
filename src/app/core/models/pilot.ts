import { Team } from "./team";

export interface Pilot {
    id: number;
    nom: string;
    prenom: string;
    nationalite: string;
    equipe: Team;
    dateOfBirth: Date
}


