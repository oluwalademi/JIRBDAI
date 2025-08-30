import { ojsConfig } from "@/lib/ojs/config";

export const createOjsClient = () => {
  const baseUrl = ojsConfig.ojsUrl;
  const apiToken = ojsConfig.ojsToken;

  /**
   * Generic request wrapper
   * @param endpoint API path
   * @param options { method, params, wrap }
   */
  const request = async (
    endpoint: string,
    options: {
      method?: string;
      params?: Record<string, any>;
      wrap?: boolean;
    } = {},
  ) => {
    const { method = "GET", params, wrap = true } = options;

    let url = `${baseUrl}${endpoint}`;

    // Add query params if provided
    if (params && Object.keys(params).length > 0) {
      const query = new URLSearchParams(
        Object.entries(params).reduce(
          (acc, [key, val]) => ({ ...acc, [key]: String(val) }),
          {} as Record<string, string>,
        ),
      ).toString();
      url += endpoint.includes("?") ? `&${query}` : `?${query}`;
    }

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`OJS API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Wrap only if requested (submissions usually)
    return wrap
      ? {
          items: data.items ?? [],
          total: data.itemsMax ?? 0,
        }
      : data;
  };

  return {
    get issues() {
      return {
        list: () => request(`/issues`, { wrap: false }), // raw
        get: (issueId: number) =>
          request(`/issues/${issueId}`, { wrap: false }), // raw
      };
    },
    get submissions() {
      return {
        list: (
          count = 10,
          offset = 0,
          orderBy?: string,
          orderDirection?: string,
          issueIds?: string,
          searchPhrase?: string,
        ) => {
          const params: Record<string, any> = { count, offset };
          if (orderBy) params.orderBy = orderBy;
          if (orderDirection) params.orderDirection = orderDirection;
          if (issueIds) params.issueIds = issueIds;
          if (searchPhrase) params.searchPhrase = searchPhrase;

          return request(`/submissions?status=3`, { params });
        },
        get: (submissionId: number, publicationId: number) =>
          request(
            `/submissions/${submissionId}/publications/${publicationId}`,
            { wrap: false }, // raw detail
          ),
      };
    },
    get stats() {
      return {
        contexts: (params = "") =>
          request(`/stats/contexts${params ? `?${params}` : ""}`, {
            wrap: false,
          }),
        issues: (params = "") =>
          request(`/stats/issues${params ? `?${params}` : ""}`, {
            wrap: false,
          }),
        publications: (params = "") =>
          request(`/stats/publications${params ? `?${params}` : ""}`, {
            wrap: false,
          }),
      };
    },
  };
};
