/**
 * Poyo AI API Client for Nano Banana 2
 */

interface PoyoSubmitRequest {
  model: string;
  callback_url?: string;
  input: {
    prompt: string;
    image_urls?: string[];
    size?: string;
    resolution?: string;
    google_search?: boolean;
  };
}

interface PoyoSubmitResponse {
  code: number;
  data?: {
    task_id: string;
    status: string;
    created_time: string;
  };
  error?: {
    message: string;
    type: string;
  };
}

interface PoyoTaskResponse {
  code: number;
  data?: {
    task_id: string;
    status: string;
    files?: Array<{
      file_url: string;
      file_type: string;
    }>;
    created_time?: string;
    progress?: number;
    error_message?: string | null;
  };
  error?: {
    message: string;
    type: string;
  };
}

export class PoyoClient {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string, baseURL: string = "https://api.poyo.ai") {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async submitTask(request: PoyoSubmitRequest): Promise<string> {
    const response = await fetch(`${this.baseURL}/api/generate/submit`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const data: PoyoSubmitResponse = await response.json();

    if (data.code !== 200 || !data.data) {
      throw new Error(data.error?.message || "Failed to submit task");
    }

    return data.data.task_id;
  }

  async getTaskStatus(taskId: string): Promise<PoyoTaskResponse> {
    const response = await fetch(`${this.baseURL}/api/generate/status/${taskId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
      },
    });

    return await response.json();
  }

  async waitForCompletion(taskId: string, maxWaitTime: number = 120000): Promise<PoyoTaskResponse> {
    const startTime = Date.now();
    const pollInterval = 3000; // 3 seconds

    while (Date.now() - startTime < maxWaitTime) {
      const status = await this.getTaskStatus(taskId);

      if (status.data?.status === "finished") {
        return status;
      }

      if (status.data?.status === "failed") {
        throw new Error(status.data.error_message || "Task failed");
      }

      // Show progress if available
      if (status.data?.progress !== undefined) {
        process.stdout.write(`\r\x1b[90mProgress: ${status.data.progress}%\x1b[0m`);
      }

      // Wait before next poll
      await new Promise(resolve => setTimeout(resolve, pollInterval));
    }

    throw new Error("Task timeout");
  }

  async downloadImage(url: string): Promise<Buffer> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }
}
