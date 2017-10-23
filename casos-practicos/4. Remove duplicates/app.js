//Definir la función que nos quitará
var removerDuplicados = function (array) {
  var newArray = [];
  for (var i = 0; i < array.length; i+=1){
    if (newArray.indexOf(array[i])=== -1){
      console.log ('no esta el número ' + array[i]);
      console.log(array[i]);
      newArray.push(array[i])
    }
  }
  return newArray;
}

var enviarArray = [4, 7, 9, 4, 0, 7];
document.write(removerDuplicados(enviarArray));
