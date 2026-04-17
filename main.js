function checkCars () {
    let carCounter = 18;
    const maxCars = 25; 

    while (carCounter < maxCars) {
        window.alert("The car" + carCounter + "is entering.");
        carCounter += 1;
    }
    window.alert ("Full parking");
}