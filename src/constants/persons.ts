

export type Person = {
  id: string
  name: string
  imageSrc: string
}

export const persons: Person[] = [
  { id: 'person-1', name: 'Alice Johnson', imageSrc: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 'person-2', name: 'Bob Smith', imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 'person-3', name: 'Charlie Brown', imageSrc: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 'person-4', name: 'Diana Prince', imageSrc: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 'person-5', name: 'Ethan Hunt', imageSrc: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 'person-6', name: 'Fiona Gallagher', imageSrc: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 'person-7', name: 'George Clooney', imageSrc: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: 'person-8', name: 'Hannah Montana', imageSrc: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 'person-9', name: 'Ian McKellen', imageSrc: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 'person-10', name: 'Julia Roberts', imageSrc: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: 'person-11', name: 'Kevin Hart', imageSrc: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 'person-12', name: 'Laura Dern', imageSrc: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 'person-13', name: 'Michael Jordan', imageSrc: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { id: 'person-14', name: 'Natalie Portman', imageSrc: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { id: 'person-15', name: 'Oscar Isaac', imageSrc: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: 'person-16', name: 'Penelope Cruz', imageSrc: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { id: 'person-17', name: 'Quentin Tarantino', imageSrc: 'https://randomuser.me/api/portraits/men/17.jpg' },
  { id: 'person-18', name: 'Rachel Green', imageSrc: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: 'person-19', name: 'Steve Jobs', imageSrc: 'https://randomuser.me/api/portraits/men/19.jpg' },
  { id: 'person-20', name: 'Tina Fey', imageSrc: 'https://randomuser.me/api/portraits/women/20.jpg' },
  { id: 'person-21', name: 'Uma Thurman', imageSrc: 'https://randomuser.me/api/portraits/women/21.jpg' },
] as const;