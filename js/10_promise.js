/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I'm waiting 2 seconds");
  }, 2000);
});

module.exports = { sleep };
