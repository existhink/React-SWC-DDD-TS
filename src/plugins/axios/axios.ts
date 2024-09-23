// Axios
import axios, {
  type InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosError,
} from "axios";

// Mitt
import eventBus from "../mitt/mitt";

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL
    ? `${import.meta.env.VITE_APP_BASE_API_URL}`
    : "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @description Handle bussiness logic for set up request configurations
 */
httpClient.interceptors.request.use(
  (configurations: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return configurations;
  }
);

/**
 * @description Handle bussiness logic for set up response interceptors
 */
httpClient.interceptors.response.use(
  undefined,
  (error: AxiosError<{ message?: string }>) => {
    /**
     * @description Here's we can handle various errors.
     */
    switch (error.response?.status) {
      case 400:
        eventBus.emit(EToastType.DANGER, {
          isOpen: true,
          message: error.response?.data?.message ?? "Bad Request",
          position: EToastPosition.TOP_RIGHT,
          type: EToastType.DANGER,
        });
        break;
      case 401:
        eventBus.emit(EToastType.DANGER, {
          isOpen: true,
          message: error.response?.data?.message ?? "Unauthorized",
          position: EToastPosition.TOP_RIGHT,
          type: EToastType.DANGER,
        });
        break;
      case 500:
        eventBus.emit(EToastType.DANGER, {
          isOpen: true,
          message: error.response?.data?.message ?? "Internal Server Error",
          position: EToastPosition.TOP_RIGHT,
          type: EToastType.DANGER,
        });
        break;
      default:
        eventBus.emit(EToastType.DANGER, {
          isOpen: true,
          message: error.response?.data?.message ?? "Something went wrong",
          position: EToastPosition.TOP_RIGHT,
          type: EToastType.DANGER,
        });
        break;
    }

    return Promise.reject(error);
  }
);

export default httpClient;
