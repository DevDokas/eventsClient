import { ICategory } from "./i-category"
import { IEvent } from "./i-event"

export interface IEventsByCategory {
  categoria: ICategory,
  eventos: IEvent[]
}
