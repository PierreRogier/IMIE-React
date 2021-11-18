// INTRO

// Un objet se définit ainsi en javascript
const monObjet = { personne: { prenom: "Jean", nom: "Castex" }, job: "Politicien" };
// personne et job sont des "keys" et ce qui se trouve à droite de ces keys sont leurs valeurs
// ces valeurs peuvent être des "primitives" (nombres, chaines de caractéres, booleen, etc...) ou des objets (Objects, Array, etc...)

// Pour accéder aux valeurs de ces objets, il existe principalement 2 méthodes:
const lePrenom = monObjet.personne.prenom; // => "Jean"
const leJob = monObjet["job"]; // => "Politicien"

// DESTRUCTURATION DES OBJETS (ES6)

// Pour récupérer certaines données d'un objet et les stockers dans des variables afin de les manipuler
const { personne, job } = monObjet;
console.log(personne); // => { prenom: "Jean", nom: "Castex" }
console.log(job); // => "Politicien"

// il est possible de destructurer de manière encore plus poussée:
const {
	personne2: { prenom, nom },
} = monObjet;
console.log(prenom); // => "Jean"
// notez qu'il n'est pas nécessaire de tout récupérer (ici, nous n'avons pas récupéré job)

// COPIER DES OBJETS

// EXAMPLE 1 | Copie d'objets "simples"

const objetSimple = { prenom: "Jean", nom: "Castex" };
const copieObjetSimple = { ...objetSimple };

copieObjetSimple.nom = "Castsaphiore";

console.log(objetSimple); // => { prenom: 'Jean', nom: 'Castex' }
console.log(copieObjetSimple); // => { prenom: 'Jean', nom: 'Castsaphiore' }
// La copie par valeur a fonctionné

// EXAMPLE 2.1 | Copie d'objets "complexes" (plus profond) =>  par référence

const objetComplexe1 = { personne: { prenom: "Jean", nom: "Castex" }, job: "Politicien" };
const copieObjetComplexe1 = { ...objetComplexe1 };

copieObjetComplexe1.personne.nom = "Castsaphiore";

console.log(objetComplexe1); // => { personne: { prenom: 'Jean', nom: 'Castsaphiore' }, job: 'Politicien' }
console.log(copieObjetComplexe1); // => { personne: { prenom: 'Jean', nom: 'Castsaphiore' }, job: 'Politicien' }
// Pour les objets plus complexes, nous avons une copie de référence. On appelle ça "Shallow copy"

// EXAMPLE 2.2 | Copie d'objets "complexes" (plus profond) => par valeur

const objetComplexe2 = { personne: { prenom: "Jean", nom: "Castex" }, job: "Politicien" };
const copieObjetComplexe2 = JSON.parse(JSON.stringify(objetComplexe2));

copieObjetComplexe2.personne.nom = "Castsaphiore";

console.log(objetComplexe2); // => { personne: { prenom: 'Jean', nom: 'Castex' }, job: 'Politicien' }
console.log(copieObjetComplexe2); // => { personne: { prenom: 'Jean', nom: 'Castsaphiore' }, job: 'Politicien' }

// Pour avoir une copie complete d'un objet complexe, il nous faut donc d'abord le transformer en string grâce à JSON.stringify
// Et ensuite le retransformer en objet grâce à JSON.parse
