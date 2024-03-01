// TODO: Generate API client with OpenAPI generator later
export class BloggyApi {
  private static readonly BASE_URL = import.meta.env.VITE_API_URL

  /**
   * Authenticate the user with GitHub code and return the `LoginResponse`.
   */
  public static async login(code: string): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>('/login/github/authorize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    })
    return response
  }

  private static async request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(this.BASE_URL + url, options)
    const contentType = await response.json()

    contentType.ok = response.ok

    return contentType
  }
}

interface ErrorResponse {
  // Additional internal flag to check if the request was successful
  ok: boolean
  code: string
  message: string
}

interface LoginResponse extends ErrorResponse {
  token: string
}
