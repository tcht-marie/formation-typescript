/**
 * Exercice 18: Utility Types - Exclude & Extract
 *
 * 1. Définir un type `Status` comme union : `"pending" | "approved" | "rejected" | "cancelled"`.
 *
 * 2. Créer un type `ActiveStatus` en utilisant `Exclude` pour exclure `"cancelled"`.
 *
 * 3. Créer un type `FinalStatus` en utilisant `Extract` pour ne garder que `"approved" | "rejected"`.
 *
 * 4. Créer une fonction `canTransition(from, to)` qui :
 *    - Prend deux `Status`
 *    - Retourne `true` si la transition est valide :
 *      - De `"pending"` vers `"approved"`, `"rejected"` ou `"cancelled"`
 *      - De `"approved"` ou `"rejected"` vers `"cancelled"`
 *      - Aucune autre transition n'est permise
 *
 * 5. Créer une fonction `isFinalStatus(status)` qui retourne `true` si le status est un `FinalStatus`.
 *
 * Exemples :
 *   canTransition("pending", "approved")   // true
 *   canTransition("approved", "pending")   // false
 *   canTransition("rejected", "cancelled") // true
 *
 *   isFinalStatus("approved")  // true
 *   isFinalStatus("pending")   // false
 */

// TODO: Définir les types

export type Status = "pending" | "approved" | "rejected" | "cancelled";

export type ActiveStatus = Exclude<Status, "cancelled">; // Utiliser exclure cancelled

export type FinalStatus = Extract<Status, "approved" | "rejected">; // uniquement approved ou rejected

export function canTransition(from: Status, to: Status): boolean {
    if ((from === "approved" || from === "rejected" || from === "cancelled") && to === "pending") {
        return false
    } else if (from === "cancelled" && (to === "approved" || to === "rejected")) {
        return false
    }
    return true
}
console.log(canTransition("pending", "approved"));
console.log(canTransition("approved", "pending"));
console.log(canTransition("rejected", "cancelled"));

export function isFinalStatus(status: Status): boolean {
  return status === "approved" || status === "rejected";
}

console.log(isFinalStatus("approved"))
console.log(isFinalStatus("pending"))