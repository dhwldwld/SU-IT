export type Club = {
  id?: string
  logo?: string
  name?: string
  description?: string
  speciality?: boolean
  color?: string
  imgcount?: number
}
export type QnA = {
  question: string
  answer: string
}

export type Awards = {
  title: string
  rate: string[]
}

export type Member = {
  name: string
  call: string
}

export type Contact = {
  director: Member
  viceDirector: Member
}

export type Detail = {
  introduce: string
  activity: string
  awards?: Awards[]
  contact: Contact
}

export interface ClubData {
  [id: string]: Club
}

export interface DetailData {
  [id: string]: Detail
}