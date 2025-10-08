export interface Course {
  id: number;
  name: string;
  category: Category;
  rating: number;
  year: number;
  professor: string;
  description: string;
}

export enum Category {
  Tecnlogia = 'Tecnlogia',
  Arte = 'Arte',
  Culinaria = 'Culinaria',
  Financas = 'Financas',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Fotografia = 'Fotografia',
  Escrita = 'Escrita',
  Musica = 'Musica',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicacao = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saude'
}
