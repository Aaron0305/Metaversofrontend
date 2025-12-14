import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ApiResponse {
    success: boolean;
    message: string;
    data?: unknown;
    errors?: Array<{ field: string; message: string }>;
}

interface RecoveryResult {
    success: boolean;
    message: string;
    errors?: Array<{ field: string; message: string }>;
}

const apiClient = axios.create({
    baseURL: `${API_URL}/api`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendRecoveryEmail = async (email: string): Promise<RecoveryResult> => {
    try {
        const response = await apiClient.post<ApiResponse>('/auth/send-recovery-email', { email });
        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse>;
        const errorMessage = axiosError.response?.data?.message ||
            axiosError.response?.data?.errors?.[0]?.message ||
            'Error al enviar el email de recuperación';

        // Lanzar el error para que el frontend lo capture
        throw new Error(errorMessage);
    }
};

export default apiClient;
