/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = new Promise(() => {
  setTimeout(() => {
    console.log("I'm waiting 2 seconds");
  }, 2000);
});

module.exports = { sleep };
