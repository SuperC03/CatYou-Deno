import { Cats, ICat } from './cats.ts';

export const catYou = (name?: string): string => {
	if (name) {
        let selectedCat: ICat;
		Cats.forEach((cat: ICat) => {
            if(cat.name === name) {
               selectedCat = cat; 
            }
        });
        if(selectedCat) {
            return selectedCat.body.join('\n');
        } else {
            return Cats[Math.floor(Math.random() * Cats.length)].body.join("\n");
        }
	} else {
        return Cats[Math.floor(Math.random() * Cats.length)].body.join("\n");
    }
};