// TODO: Generate API client with OpenAPI generator later
export class BloggyApi {
  private static readonly BASE_URL = import.meta.env.VITE_API_URL

  /**
   * Authenticate the user with GitHub code and return the `LoginResponse`.
   */
  public static async login(code: string): Promise<LoginResponse & ErrorResponse> {
    const response = await this.request<LoginResponse & ErrorResponse>('/login/github/authorize', {
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
  public static async refreshToken(token: string): Promise<LoginResponse & ErrorResponse> {
    // Setup token as a Bearer token
    const response = await this.request<LoginResponse & ErrorResponse>('/login/refresh', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response
  }

  /**
   * Create a new post and return the `PostResponse`.
   */
  public static async createPost(
    token: string,
    post: PostRequest
  ): Promise<PostResponse & ErrorResponse> {
    const response = await this.request<PostResponse & ErrorResponse>('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(post)
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

interface LoginResponse {
  token: string
}

interface PostRequest {
  title: string
  slug: string
  description: string
  keywords?: string[]
  content: string
  // TODO: isPublished
}

interface PostResponse extends PostRequest {
  id: string
  reading_time: number
  created_at: string
  updated_at: string
}
