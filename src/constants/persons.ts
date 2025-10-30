

export type Person = {
  id: string
  name: string
  imageSrc: string
}

export const persons: Person[] = [
  { id: 'person-1', name: 'Alberto', imageSrc: './persons/AlbertoHinojosa.jpg' },
  { id: 'person-2', name: 'Alfredo', imageSrc: "./persons/Alfredo Marti.jpg" },
  { id: 'person-3', name: 'Arantxa', imageSrc: "./persons/Arantxa Garrido.jpeg" },
  { id: 'person-4', name: 'Carlos', imageSrc: "./persons/Carlos Palmer.jpg" },
  { id: 'person-5', name: 'Danny', imageSrc: "./persons/Danny Alejandro Camara.jpg" },
  { id: 'person-6', name: 'Gis', imageSrc: "./persons/Gislayne Rodrigues.jpg" },
  { id: 'person-7', name: 'Ismael Bosch', imageSrc: "./persons/Ismael B..jpg" },
  { id: 'person-8', name: 'Ismael Del Arroyo', imageSrc: "./persons/Ismael Del Arroyo.jpg" },
  { id: 'person-9', name: 'Jaime', imageSrc: "./persons/Jaime Garcia.jpg" },
  { id: 'person-10', name: 'Javi', imageSrc: "./persons/Javier Vidal.jpg" },
  { id: 'person-11', name: 'Jose Miguel', imageSrc: "./persons/Jose Miguel Fernandez.jpg" },
  { id: 'person-12', name: 'Julen', imageSrc: "./persons/Julen Palanques.jpg" },
  { id: 'person-13', name: 'Mauro', imageSrc: "./persons/Mauro Segarra.jpg" },
  { id: 'person-14', name: 'Néstor', imageSrc: "./persons/Nestor Gonzalez.jpeg" },
  { id: 'person-15', name: 'Núria', imageSrc: "./persons/Núria Moratalla.jpg" },
  { id: 'person-16', name: 'Pablo', imageSrc: "./persons/Pablo Durá.jpg" },
  { id: 'person-17', name: 'Rafa', imageSrc: "./persons/Rafael Sanchez.jpg" },
  { id: 'person-18', name: 'Ramón', imageSrc: "./persons/Ramón Lopez.jpg" },
  { id: 'person-19', name: 'Raúl', imageSrc: "./persons/Raul Ejarque.jpg" },
  { id: 'person-20', name: 'Ruth', imageSrc: "./persons/Ruth Ruiz.jpg" },
  { id: 'person-21', name: 'Víctor', imageSrc: "./persons/Victor Ferrer.jpg" },
] as const;