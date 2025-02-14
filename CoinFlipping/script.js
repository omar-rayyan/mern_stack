function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        while (headsCount < 5) {
            attempts++;
            const result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }

        resolve(`It took ${attempts} tries to flip five "heads"`);
    });
}

fiveHeads()
    .then(response => console.log(response))
    .catch(error => console.log(error));