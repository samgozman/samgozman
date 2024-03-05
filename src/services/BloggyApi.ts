// TODO: Generate API client with OpenAPI generator later
export class BloggyApi {
  private static readonly BASE_URL = import.meta.env.VITE_API_URL

  /**
   * Authenticate the user with GitHub code and return the `LoginResponse`.
   */
  public static async login(code: string): Promise<LoginResponse & ErrorResponse> {
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
  public static async refreshToken(token: string): Promise<LoginResponse & ErrorResponse> {
    // Setup token as a Bearer token
    const response = await this.request<LoginResponse>('/login/refresh', {
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
    const response = await this.request<PostResponse>('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(post)
    })

    return response
  }

  /**
   * Update a post by its slug and return the `PostResponse`.
   */
  public static async updatePostBySlug(
    token: string,
    slug: string,
    post: PutPostRequest
  ): Promise<PostResponse & ErrorResponse> {
    const response = await this.request<PostResponse>(`/posts/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(post)
    })

    return response
  }

  /**
   * Get a post by its slug and return the `PostResponse`.
   */
  public static async getPostBySlug(slug: string): Promise<PostResponse & ErrorResponse> {
    const response = await this.request<PostResponse>(`/posts/${slug}`, {
      method: 'GET'
    })

    return response
  }

  /**
   * Get all posts and return the `PostListResponse`.
   */
  public static async getPosts(
    page?: number,
    limit?: number
  ): Promise<PostListResponse & ErrorResponse> {
    let url = '/posts'
    const params = new URLSearchParams()

    if (page) {
      params.append('page', page.toString())
    }

    if (limit) {
      params.append('limit', limit.toString())
    }

    if (params.toString()) {
      url += '?' + params.toString()
    }

    const response = await this.request<PostListResponse>(url, {
      method: 'GET'
    })

    return response
  }

  private static async request<T>(url: string, options: RequestInit): Promise<T & ErrorResponse> {
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
}

export interface PostResponse extends PostRequest {
  id: string
  reading_time: number
  created_at: string
  updated_at: string
}

type PutPostRequest = Omit<PostRequest, 'slug'>

export type PostListItem = Omit<PostResponse, 'content' | 'id' | 'updated_at'>

interface PostListResponse {
  posts: PostListItem[]
  total: number
}