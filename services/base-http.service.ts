import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { APIErrorResponse } from "../models/api-error-response.model";
import { APIResponse } from "../models/api-response.model";

export default abstract class BaseHttpService {
  protected abstract getApiKey(): string;
  protected abstract get BASE_URL(): string;

  protected async get<T = any>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<APIResponse<T> | void> {
    Object.assign(options, this._getCommonOptions());
    const apiEndpoint = `${this.BASE_URL}${endpoint}`;

    return axios
      .get<APIResponse<T>>(`${apiEndpoint}`, options)
      .then((res: (AxiosResponse<APIResponse<T>>)) => res.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error)
      );
  }

  // private methods

  private _handleHttpError(error: AxiosError<APIErrorResponse>) {
    if (error?.response?.data) {
      const { status } = error?.response;
      if (status === 404) return this._handle404(error);

      throw error.response.data;

    } else {
      throw error;
    }
  }

  private _handle404(error: AxiosError<APIErrorResponse>) {
    console.log(error);
  }

  private _getCommonOptions(): {} {
    // const token = this.loadToken();

    // return {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    return {};
  }
}
