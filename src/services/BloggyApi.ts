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

  /**
   * Refresh the user's token and return the `LoginResponse`.
   */
  public static async refreshToken(token: string): Promise<LoginResponse> {
    // Setup token as a Bearer token
    const response = await this.request<LoginResponse>('/login/refresh', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response
  }

  private static async request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(this.BASE_URL + url, options)
    const contentBody = await response.json()

    contentBody.ok = response.ok

    return contentBody
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
