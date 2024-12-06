export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes?: string[];
    level?: string;
    hp?: string;
    types?: string[];
    evolvesFrom?: string;
    images?: {
        small: string;
        large: string;
    };
}
