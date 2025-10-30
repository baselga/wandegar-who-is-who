

export type Person = {
  id: string
  name: string
  imageSrc: string
}

export const persons: Person[] = [
  { id: 'person-1', name: 'Alberto Hinojosa', imageSrc: './persons/AlbertoHinojosa.jpg' },
  { id: 'person-2', name: 'Alfredo Marti', imageSrc: "./persons/Alfredo Marti.jpg" },
  { id: 'person-3', name: 'Arantxa Garrido', imageSrc: "./persons/Arantxa Garrido.jpeg" },
  { id: 'person-4', name: 'Carlos Palmer', imageSrc: "./persons/Carlos Palmer.jpg" },
  { id: 'person-5', name: 'Danny Alejandro Camara', imageSrc: "./persons/Danny Alejandro Camara.jpg" },
  { id: 'person-6', name: 'Gislayne Rodrigues', imageSrc: "./persons/Gislayne Rodrigues.jpg" },
  { id: 'person-7', name: 'Ismael B.', imageSrc: "./persons/Ismael B..jpg" },
  { id: 'person-8', name: 'Ismael Del Arroyo', imageSrc: "./persons/Ismael Del Arroyo.jpg" },
  { id: 'person-9', name: 'Jaime Garcia', imageSrc: "./persons/Jaime Garcia.jpg" },
  { id: 'person-10', name: 'Javier Vidal', imageSrc: "./persons/Javier Vidal.jpg" },
  { id: 'person-11', name: 'Jose Miguel Fernandez', imageSrc: "./persons/Jose Miguel Fernandez.jpg" },
  { id: 'person-12', name: 'Julen Palanques', imageSrc: "./persons/Julen Palanques.jpg" },
  { id: 'person-13', name: 'Mauro Segarra', imageSrc: "./persons/Mauro Segarra.jpg" },
  { id: 'person-14', name: 'Nestor Gonzalez', imageSrc: "./persons/Nestor Gonzalez.jpeg" },
  { id: 'person-15', name: 'Núria Moratalla', imageSrc: "./persons/Núria Moratalla.jpg" },
  { id: 'person-16', name: 'Pablo Durá', imageSrc: "./persons/Pablo Durá.jpg" },
  { id: 'person-17', name: 'Rafael Sanchez', imageSrc: "./persons/Rafael Sanchez.jpg" },
  { id: 'person-18', name: 'Ramón Lopez', imageSrc: "./persons/Ramón Lopez.jpg" },
  { id: 'person-19', name: 'Raul Ejarque', imageSrc: "./persons/Raul Ejarque.jpg" },
  { id: 'person-20', name: 'Ruth Ruiz', imageSrc: "./persons/Ruth Ruiz.jpg" },
  { id: 'person-21', name: 'Victor Ferrer', imageSrc: "./persons/Victor Ferrer.jpg" },
] as const;