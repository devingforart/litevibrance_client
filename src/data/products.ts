// src/data/products.ts
export interface Product {
  uuid: string;
  name: string;
  description: string;
  price: number;
  photos: string[];
  slug: string;
}

export const dummyProducts: Product[] = [
  {
    uuid: '1',
    name: 'Médicos',
    description:
      'Especialistas de todas las áreas lo atenderán en forma presencial o por telemedicina; es el ofrecimiento de servicios médicos a distancia, utilizando para ello tecnologías de información y telecomunicación.',
    price: 19.99,
    photos: [
      'https://img.freepik.com/free-photo/female-doctor-working-medicine-specialist_144627-30293.jpg?t=st=1738897564~exp=1738901164~hmac=bf1025a1f282175b1e65c10851f51fc85eab5df813b664dcabc175d3e5379cb5&w=740'
    ],
    slug: 'producto-1'
  },
  {
    uuid: '2',
    name: 'Enfermeros',
    description: 'Respondiendo a la complejidad de las prestaciones se asignará personal profesional o auxiliares según sea el caso, siempre previa visita de la Coordinadora quien chequeará que el domicilio o la institución donde esté alojado cuente con los medios adecuados para su atención segura.',
    price: 29.99,
    photos: [
      'https://img.freepik.com/free-photo/closeup-support-hands_53876-14963.jpg?t=st=1738897599~exp=1738901199~hmac=ae37f13243ea70f82f6e13d9f2d67b50924249ba8cb220bbce183ae3ded315e6&w=1380'
    ],
    slug: 'producto-2'
  },
  {
    uuid: '3',
    name: 'Kinesiólogos',
    description: 'Además de dedicarse a rehabilitar pacientes con problemas motrices o de movimiento corporal, la necesidad de tratamientos por problemas respiratorios que estamos transitando colocan en un rol de relevancia a estos profesionales. La concertación de acciones en conjunto con otras del equipo es llevada a cabo por la Coordinadora, haciendo que la asistencia sea recibida en forma correcta y en el tiempo que requiera cada persona en particular.',
    price: 39.99,
    photos: [
      'https://img.freepik.com/free-photo/female-physiotherapist-applying-elastic-medical-bandage-male-patient_23-2149143837.jpg?t=st=1738897692~exp=1738901292~hmac=fd7c011197817ed79117c1570121f6fb866e6fead906f6af060008c5d1885dfd&w=1380'
    ],
    slug: 'producto-3'
  },
  {
    uuid: '4',
    name: 'Otros Profesionales',
    description: 'Ver catálogo de profesionales',
    price: 49.99,
    photos: [
      'https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?t=st=1738897768~exp=1738901368~hmac=7c8cdfe1cc701033b4f7d562bdad6c119735cadf5e2b21075720407b370aa0df&w=1380'
    ],
    slug: 'producto-4'
  }
];
