/* 5.- Nuevos jugadores (50 ptos).
1. Clase persona con propiedades nombre, apellido y edad
1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la
persona.
1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
2. La clase jugador hereda de persona e incluye la propiedad de posición
2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y los de jugador.
2.2. El constructor recibe y asigna posición a los atributos internos.
3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
federación
3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y entrenador.
_______________________________________________________________________________________________
_______________________________________________________________________________________________
3.2. El constructor recibe y asigna posición a los atributos internos.
3.3. En el constructor configurar para que si no se recibe un id de federación este
asigne un número aleatorio de 5 dígitos
4. Clase equipo tiene las propiedades de entrenador y jugadores
4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que
pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los
jugadores.
5. ¡Probemos!
5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
(Portero, Defensa , Medio y Delantero).
5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el
funcionamiento de jerarquía. */ 

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`);
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posición: ${this.posicion}`);
    }
}

class Entrenador extends Persona {
    constructor(nombre, apellido, edad, anosExperiencia, idFederacion = null) {
        super(nombre, apellido, edad);
        this.anosExperiencia = anosExperiencia;
        this.idFederacion = idFederacion || Math.floor(10000 + Math.random() * 90000);
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Años de experiencia: ${this.anosExperiencia}, ID de Federación: ${this.idFederacion}`);
    }
}

class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log("Detalles del entrenador:");
        this.entrenador.getDetalles();
        console.log("\nDetalles de los jugadores:");
        this.jugadores.forEach(jugador => jugador.getDetalles());
    }
}

const jugadores = [
    new Jugador("Carlos", "Pérez", 24, "Portero"),
    new Jugador("Juan", "Gómez", 28, "Defensa"),
    new Jugador("Luis", "Ramírez", 22, "Medio"),
    new Jugador("Pedro", "Martínez", 26, "Delantero")
];

const entrenador = new Entrenador("Miguel", "Santos", 45, 20);

const equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();