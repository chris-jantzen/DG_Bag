export interface DiscProps {
  disc: DiscProperties;
}

export interface DiscProperties {
  id: string;
  name: string;
  manufacturer?: string;
  plastic?: string;
  weight?: number;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  color: string;
  notes?: string;
}
