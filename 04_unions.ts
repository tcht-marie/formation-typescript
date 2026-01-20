/**
 * Exercice 04: Unions
 *
 * Créer deux fonctions:
 *
 * 1. `formatId(id)` :
 *    - id: number | string - l'identifiant
 *    - Accepte soit un number soit un string
 *    - Retourne toujours un string
 *    - Si c'est un nombre, préfixe avec "ID-"
 *    - Si c'est déjà un string, retourne tel quel
 *
 *    Exemple:
 *      formatId(123) => "ID-123"
 *      formatId("ABC") => "ABC"
 *
 * 2. `getUsername(user)` :
 *    - user: { username: string } | null
 *    - Retourne le nom d'utilisateur en MAJUSCULES si user n'est pas null
 *    - Retourne "INVITÉ" si user est null
 *
 *    Exemple:
 *      getUsername({ username: "alice" }) => "ALICE"
 *      getUsername(null) => "INVITÉ"
 */

// TODO: Définir le type User et implémenter les fonctions

export type User = { username: string };

export function formatId(id: number | string): string {
  return id === typeof 'number' ? `ID- ${id}` : id.toString()
}

console.log(formatId(77));
console.log(formatId('HEY'));

export function getUsername(user?: User | null) {
  return user?.username ? user?.username.toUpperCase() : "INVITÉ"
}

console.log(getUsername());
console.log(getUsername(null));
console.log(getUsername({username: "Cronos"}));

