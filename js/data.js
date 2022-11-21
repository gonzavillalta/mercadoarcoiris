// Constructor Productos Corporativos
class Corporativo {
    constructor(id, nombre, descripcion, precio) {
      this.id = id.toUpperCase();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = parseInt(precio);
      
    }
  }
  
  const corporativo1 = new Corporativo(
    "TE-01",
    "cargador carro",
    "a completar",
    1000
  );
  const corporativo2 = new Corporativo(
    "TE-02",
    "pila recargable",
    "a completar",
    1200
  );
  const corporativo3 = new Corporativo(
    "TE-03",
    "soporte pump",
    "a completar",
    500
  );
  const corporativo4 = new Corporativo(
    "TE-04",
    "cargador inalambrico",
    "a completar",
    1500
  );

  const listaCorporativo = [
    corporativo1,
    corporativo2,
    corporativo3,
    corporativo4,
  ];

 // Constructor Productos Sostenibles
class Sostenible {
    constructor(id, nombre, descripcion, precio) {
      this.id = id.toUpperCase();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = parseInt(precio);
      
    }
  }
  
  const sostenible1 = new Sostenible(
    "ECO-01",
    "recilapiz",
    "a completar",
    400
  );
  const sostenible2 = new Sostenible(
    "ECO-02",
    "recilapiz germinable",
    "a completar",
    700
  );
  const sostenible3 = new Sostenible(
    "ECO-03",
    "lunch set",
    "a completar",
    700
  );
  const sostenible4 = new Sostenible(
    "ECO-04",
    "pitillo",
    "a completar",
    700
  );
  
  // Array Lista Productos Sostenibles
  const listaSostenible = [sostenible1, sostenible2, sostenible3, sostenible4]; 

// Constructor productos de Regalos
class Regalos {
    constructor(id, nombre, descripcion, precio) {
      this.id = id.toUpperCase();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = parseInt(precio);
    }
  }
  
  const regalos1 = new Regalos(
    "LL-01",
    "Destapador",
    "a completar",
    300
  );
  const regalos2 = new Regalos(
    "LL-02",
    "Linterna puck",
    "a completar",
    800
  );
  const regalos3 = new Regalos(
    "TO-01",
    "metalico urban travel",
    "a completar",
    1200
  );
  const regalos4 = new Regalos(
    "TO-03",
    "metalico hans neon",
    "a completar",
    1000
  );
  
  // Array lista de Regalos
  const listaRegalos = [regalos1, regalos2, regalos3, regalos4];