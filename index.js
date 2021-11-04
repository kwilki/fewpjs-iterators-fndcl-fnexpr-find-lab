function superbowlWin(objectsArray) {
    let result = objectsArray.find(objectsArray => objectsArray.result === "W");
    return result ? result.year : undefined;
}