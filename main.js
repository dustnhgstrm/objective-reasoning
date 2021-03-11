// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function isAdmin(object) {
  let trueBoolean = true;
  if (object.userRole === "ADMIN") {
    return trueBoolean;
  } else if (object.userRole !== "ADMIN") {
    return false;
  }
}

function getEmail(object) {
  return (
    object.firstName.toLowerCase() +
    "." +
    object.lastName.toLowerCase() +
    "@codeimmersives.com"
  );
}

function getPlaylistLength(object) {
  let songCount = 0;
  for (const songs of object.songs) {
    songCount++;
  }
  return songCount;
}

//array of objects. for ex:
// const thisArray = [
// {
// const happyMeal =
//  drink: "coca-cola",
//  side: "small fry",
//  meal: "chicken Nuggets",
// },
//  {const valueMenu =
// drink: "medium sprite",
//  side: "medium fry",
//  meal: "big-mac",
// }
// ]

function getHardestHomework(array) {
  let hardestHomework = "";
  let indexCount = 0;
  let avgScore = 0;
  if (array.length < 1) {
    return hardestHomework;
  } else
    for (const hw of array) {
      if (indexCount === 0) {
        hardestHomework = hw.name;
        avgScore = hw.averageScore;
        indexCount++;
      } else if (hw.averageScore < avgScore) {
        hardestHomework = hw.name;
      }
    }
  return hardestHomework;
}

function createPhonebook(array0, array1) {
  let ourObject = {};

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== undefined) {
      ourObject[array0[i]] = array1[i];
    }
  }
  return ourObject;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === "undefined") {
  isAdmin = undefined;
}
if (typeof getEmail === "undefined") {
  getEmail = undefined;
}
if (typeof getPlaylistLength === "undefined") {
  getPlaylistLength = undefined;
}
if (typeof getHardestHomework === "undefined") {
  getHardestHomework = undefined;
}
if (typeof createPhonebook === "undefined") {
  createPhonebook = undefined;
}

module.exports = {
  isAdmin,
  getEmail,
  getPlaylistLength,
  getHardestHomework,
  createPhonebook,
};
