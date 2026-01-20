/**
 * Exercice 09: Any vs Unknown
 *
 * Créer deux fonctions:
 *
 * 1. `processUnknown(value)` :
 *    - Prend une valeur de type `unknown`
 *    - Vérifie si c'est un string
 *    - Retourne sa longueur si c'est un string, sinon retourne 0
 *
 *    Exemple:
 *      processUnknown("hello") => 5
 *      processUnknown(123) => 0
 *      processUnknown(null) => 0
 *
 * 2. `safeParseNumber(value)` :
 *    - Prend une valeur de type `unknown`
 *    - Tente de la convertir en nombre
 *    - Retourne le nombre si la conversion réussit, sinon retourne null
 *
 *    Exemple:
 *      safeParseNumber("42") => 42
 *      safeParseNumber(3.14) => 3.14
 *      safeParseNumber("abc") => null
 *      safeParseNumber(null) => null
 *
 * Note: `unknown` est plus sûr que `any` car il force la vérification
 * du type avant utilisation.
 */

// TODO: Implémenter les fonctions

export function processUnknown(value: unknown): number {
  return typeof value === 'string' ? value.length : 0
}

console.log(processUnknown("Cronos"));

export function safeParseNumber(value: unknown): number | null {
    if (typeof value === 'number' || typeof value === 'string') {
        return Number.isNaN(Number(value)) ? null : Number(value)
    }
    return null
}

console.log(safeParseNumber("42"));
console.log(safeParseNumber(3.14));
console.log(safeParseNumber("abc"));
console.log(safeParseNumber(null));
console.log(safeParseNumber(""));
