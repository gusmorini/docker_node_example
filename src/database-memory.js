import { randomUUID } from "node:crypto"

export class DatabaseMemory {

  #videos = new Map()

  list() {
    return Array.from(this.#videos.entries()).map((item) => {
      const id = item[0]
      const data = item[1]
      return {
        id,
        ...data
      }
    })
  }

  create(video) {
    const id = randomUUID()
    this.#videos.set(id, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }

}