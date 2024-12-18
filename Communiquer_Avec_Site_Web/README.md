# Fiche technique sur les fonctions intéressantes liées au DOM

Voici une fiche technique résumant l'ensemble des fonctions et propriétés principales liées au DOM.

## Accéder aux éléments
+ **getElementsByTagName()** - Sélectionne tous les éléments avec la balise entre parenthèses

+ **getElementById()** - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses

+ **getElementsByClassName()** - Sélectionne tous les éléments avec la classe entre parenthèses

+ **querySelector()** - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses

+ **querySelectorAll()** - Sélectionne tous les éléments avec le sélecteur entre parenthèses


## Modifier les éléments
+ **textContent** - Modifie le texte d'un élément

+ **innerHTML** - Modifie l'HTML d'un élément



## Ajouter et supprimer des éléments
+ **createElement()** - Crée un élément

+ **prepend()** - Ajoute l'élément entre parenthèses devant l'élément cible

+ **append()** - Ajouter l'élément entre parenthèses derrière l'élément cible (peut contenir du texte)

+ **appendChild()** - Ajouter l'élément entre parenthèses derrière l'élément cible (ne peut pas contenir du texte)

+ **insertBefore()** - Insère un élément avant l'élément cible



## Modifier le style d'un élément
+ **style.propriété** - Modifie la propriété CSS spécifiée, par exemple : style.color = "orange"

+ **className** - Modifie les classes d'un élément