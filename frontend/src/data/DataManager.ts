import { Product } from '../models/Product';
import api from './ApiService';

class DataManager {
  public async remove(id: string): Promise<void> {
    await api.delete(`/remove/${id}`);
  }

  public async add(product: Product): Promise<void> {
    await api.post('/new', product);
  }

  public async getAll(): Promise<Product[]> {
    const response = await api.get<Product[]>('/');
    return response.data;
  }
}

export default DataManager;