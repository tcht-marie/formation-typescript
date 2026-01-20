/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */

// TODO: Implémenter fetchUsername
const axios = require("axios");

export async function fetchUsername(userId: number): Promise<string> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log(response.data.username);
    return response.data.username;
}
fetchUsername(1);
fetchUsername(2);
fetchUsername(3);