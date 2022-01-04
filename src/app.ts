// Importáld be a HumanHero és TransformerHero osztályokat.
import { TransformerHero } from './transformer';
import { HumanHero } from './hero';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: 'Makákó',
        sex: 'yes',
        age: 23,
        health: 1
    },
    {
        id: 2,
        name: 'Szavannák',
        sex: 'female',
        age: 27,
        health: 97
    },
    {
        id: 11,
        name: 'Kókuszdió',
        sex: 'male',
        age: 23,
        health: 9
    }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
    {
        id: 4,
        name: 'Gyurmók',
        wings: 3,
        wheels: 3,
        clan: 'Marakuja'
    },
    {
        id: 5,
        name: 'Piszmók',
        wings: 3,
        wheels: 5,
        clan: 'Narancs'
    },
    {
        id: 6,
        name: 'Trocki',
        wings: 6,
        wheels: 2,
        clan: 'Citrom'
    }
];
