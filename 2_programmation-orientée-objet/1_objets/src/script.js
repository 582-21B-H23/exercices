/**# Exercice : POO — Objects

## Étape 1

1. Stockez la valeur de la propriété `nom` dans la variable `nomChat` en utilisant la notation entre crochets.
2. Exécuter la méthode `salutation()` en utilisant la notation avec un point (elle affichera la salutation dans la console du navigateur).
3. Mettre à jour la valeur de la propriété `couleur` à "noir".

## Étape 2

1. Réécriviez la méthode `salutation()` de manière à ce qu'elle affiche « Bonjour, dit Bertie le Cymric. » dans la console du navigateur, mais de manière à ce qu'elle fonctionne pour tout objet de chat de la même structure, quel que soit son nom ou sa race.
2. Lorsque vous avez terminé, écrivez votre propre objet appelé `chat2` qui a la même structure, et la même méthode `salutation()`, mais un nom, une race et une couleur différents.
3. Appelez les deux méthodes `salutation()` pour vérifier qu'elles affichent des salutations appropriées dans la console.

# Étape 3

1. Amélioriez le code de manière à ce que la méthode `salutation()` ne soit définie qu'une seule fois et que chaque instance de `chat` obtienne sa propre méthode `salutation()`.

**/




const chat = {
	nom: "Bertie",
	race: "Cymric",
	couleur: "white",
	salutation: function () {
		console.log("Meow!");
	},
};

console.log("1.1:")
let nomChat = chat["nom"];

console.log("1.2:")
console.log(chat.salutation());

console.log("1.3:")
chat.couleur="noir";


/*
## Étape 2

1. Réécriviez la méthode `salutation()` de manière à ce qu'elle affiche « Bonjour, dit Bertie le Cymric. » dans la console du navigateur, mais de manière à ce qu'elle fonctionne pour tout objet de chat de la même structure, quel que soit son nom ou sa race.
2. Lorsque vous avez terminé, écrivez votre propre objet appelé `chat2` qui a la même structure, et la même méthode `salutation()`, mais un nom, une race et une couleur différents.
3. Appelez les deux méthodes `salutation()` pour vérifier qu'elles affichent des salutations appropriées dans la console.
*/


chat.salutation=function () {
	console.log('Bonjour, dit ' + chat.nom + ' le ' + chat.race + '.');
};
chat.salutation();


/* 2.2. Lorsque vous avez terminé, écrivez votre propre objet appelé `chat2` qui a la même structure, et la même méthode `salutation()`, mais un nom, une race et une couleur différents.*/

const chat2 = {
	nom: "Bertie222",
	race: "Cymric222",
	couleur: "white222",
	
	salutation() {
		console.log('Bonjour, dit ' + this.nom + ' le ' + this.race + '.');
	}
};

chat2.salutation();


/*2.3. Appelez les deux méthodes `salutation()` pour vérifier qu'elles affichent des salutations appropriées dans la console.*/ 

console.log("3.3:")
chat.salutation();
chat2.salutation();


/*
# Étape 3

1. Amélioriez le code de manière à ce que la méthode `salutation()` ne soit définie qu'une seule fois et que chaque instance de `chat` obtienne sa propre méthode `salutation()`.

**/


function Chat(nom, salutation) {
	this.nom = nom;
this.salutation=salutation
	
}


let salutation = function () {
	console.log( `3a. Allô ! Moen nom est ${this.nom}.`);
};

let salutation2 = function () {
	console.log( `3b. Allô ! Moen nom est ${this.nom}.`);
};

const chat3a = new Chat('bob', salutation);
const chat3b = new Chat('tom',salutation2);

chat3a.salutation()
chat3b.salutation()








