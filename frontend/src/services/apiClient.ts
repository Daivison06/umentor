/* eslint-disable @typescript-eslint/no-explicit-any */

const apiClient = {
    get: async (url: string, options?: any) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          ...options,
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        return { data };
      } catch (error) {
        console.error('API request error:', error);
        throw error;
      }
    },
    post: async (url: string, body: any, options?: any) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body: JSON.stringify(body),
          ...options,
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        return { data };
      } catch (error) {
        console.error('API request error:', error);
        throw error;
      }
    },
  };
  
  export default apiClient;
  