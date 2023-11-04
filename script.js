const input = prompt("Please insert desired flavors, separated by commas. Available flavors: Strawberry, Coffee, Vanilla")

if (input) {

    const arrayOfFlavors = input.split(",");

    console.table(arrayOfFlavors);

    const flavorCount = {};
    for (let i=0; i < arrayOfFlavors.length; i++) {
        const flavors =arrayOfFlavors[i];
        if (flavorCount [flavors]) {
            flavorCount[flavors]++;
        } else {
            flavorCount[flavors] = 1;
        }
    }

console.log("Flavor Orders: ");
console.table(flavorCount);
} else {
    console.log("No orders for this flavor");
}

