export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

class APIClient<ResponseT> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  list = async () => {
    return fetch("/api" + this.endpoint)
      .then((res) => res.json())
      .then((res) => res.data as ResponseT[])
  }

  get = async (id: string) => {
    return fetch(`/api/${this.endpoint}/${id}`)
      .then((res) => res.json())
      .then((res) => res.data as ResponseT)
  }
  post = async (body: BodyInit) => {
    return fetch(`/api/${this.endpoint}`, {
      method: "POST",
      body,
    })
      .then((res) => res.json())
      .then((res) => res.data as ResponseT)
  }
  patch = async (id: string, body: BodyInit) => {
    return fetch(`/api/${this.endpoint}`, {
      method: "PATCH",
      body,
    })
      .then((res) => res.json())
      .then((res) => res.data as ResponseT)
  }
  delete = async (id: string) => {
    return fetch(`/api/${this.endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => res.data as ResponseT)
  }
}

export default APIClient
