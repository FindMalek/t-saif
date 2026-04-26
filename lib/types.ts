export type ProjectCategory =
  | "Commercial"
  | "Documentary"
  | "Music Video"
  | "Short Film"
  | "Corporate"

export interface Project {
  id: string
  title: string
  company: string
  date: string
  videoUrl: string
  thumbnailUrl: string
  category: ProjectCategory
}
