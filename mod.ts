import { Cats, ICat } from './cats.ts';

export const catYou = (name?: string): string => {
	return (Cats.find(c => c.name == name) || Cats[Math.floor(Math.random() * Cats.length)]).body.join('\n');
};

console.log(catYou(''));
