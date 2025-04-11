import axios, {AxiosRequestConfig} from 'axios';
import {API_KEY, BASE_URL, THROTTLLE_TIME} from '../src/api/config';

// Variables pour gérer le délai
let lastRequestTime = 0;

// Création de l'instance Axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Ajouter un intercepteur pour limiter les requêtes à une par seconde
axiosInstance.interceptors.request.use(async config => {
  // eslint-disable-next-line
  const withThrottle = (config as any)?.WithThrottle;
  if (withThrottle) {
    const now = Date.now();
    const delay = Math.max(THROTTLLE_TIME - (now - lastRequestTime), 0); // Délai nécessaire pour respecter 1 requête/s
    lastRequestTime = now + delay;

    await new Promise(resolve => setTimeout(resolve, delay)); // Attendre avant d'envoyer la requête
  }
  return config; // Retourner la configuration mise à jour
});

// Fonction pour exécuter les requêtes
const axiosQuery = async <T>(
  method: 'get' | 'post',
  url: string,
  config?: AxiosRequestConfig,
  WithThrottle?: boolean,
): Promise<T> => {
  const response = await axiosInstance[method](url, {
    ...config,
    WithThrottle: WithThrottle || false,
  });
  return response.data;
};

export default axiosQuery;
