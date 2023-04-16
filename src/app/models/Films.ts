export interface Film {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    cast: Actor[];
    revenue: number;
  }
  
  export interface Actor {
    name: string;
    character: string;
  }