const id: string | number = 'hola';

function tipoStringNumber (id: string | number): string {
  if(typeof(id) == 'string'){
    return 'string';
  }else {
    return 'number';
  }
}

console.log(tipoStringNumber(id));
