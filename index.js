// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = [];
  
  for (var i = 0; i < musiciansArray.length; i++) {
    array.push(musiciansArray[i] + ' plays ' + instrumentsArray[i]);
  }
  
  return array;
}

function johnLennonFacts(factsArray) {
//  newArray = [];
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] += '!!!';
    i++;
  }
  return factsArray;
}
