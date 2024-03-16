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
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
  }

  /**
   * Subscribe to the newsletter and return the `ErrorResponse` if any.
   */
  public static async subscribeToNewsletter(
    email: string,
    captcha: string
  ): Promise<ErrorResponse> {
    const response = await this.request<ErrorResponse>(
      '/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, captcha })
      },
      true
    )

    return response
  }

  /**
   * Confirm the subscription by token and return the `ErrorResponse` if any.
   */
  public static async confirmSubscription(token: string, captcha: string): Promise<ErrorResponse> {
    const response = await this.request<ErrorResponse>(
      `/subscribers/confirm`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, captcha })
      },
      true
    )

    return response
  }

  public static async unsubscribe(subscriptionId: string, reason: string): Promise<ErrorResponse> {
    const response = await this.request<ErrorResponse>(
      `/subscribers`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subscription_id: subscriptionId,
          reason
        })
      },
      true
    )

    return response
  }

  public static async sendPostToSubscribers(token: string, slug: string) {
    const response = await this.request<ErrorResponse>(
      `/posts/${slug}/send-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      },
      true
    )

    return response
  }

  private static async request<T>(
    url: string,
    options: RequestInit,
    isNoContent = false
  ): Promise<T & ErrorResponse> {
    const response = await fetch(this.BASE_URL + url, options)

    if (!isNoContent || !response.ok) {
      const contentBody = await response.json()
      contentBody.ok = response.ok
      return contentBody
    }

    return {
      ok: response.ok
    } as T & ErrorResponse
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

export type PostListItem = Omit<PostResponse, 'content' | 'id' | 'updated_at'> & {
  sent_to_subscribers_at: string
}

interface PostListResponse {
  posts: PostListItem[]
  total: number
}
