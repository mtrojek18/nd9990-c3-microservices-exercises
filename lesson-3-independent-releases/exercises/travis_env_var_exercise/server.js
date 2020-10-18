
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

  const favoriteVar = process.env.FAVORITE_VAR;
  console.log(`My favorite var is ${favoriteVar}`);

  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
