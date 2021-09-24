import {
  newProductI,
  ProductI,
  addProductI,
} from '../models/productos/products.interface';
import faker from 'faker';

class ProductosFakerAPI {
  private productos: ProductI[] = [];

  async get(cant: number = 10): Promise<ProductI[]> {
    this.productos.splice(0, this.productos.length);

    for (let i = 0; i < cant; i++) {
      const element: ProductI = {
        _id: faker.datatype.uuid(),
        timestamp: faker.date.past(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        precio: Number(faker.commerce.price()),
        codigo: faker.random.alphaNumeric(),
        url: faker.image.imageUrl(),
        stock: faker.datatype.number(100),
      };
      this.productos.push(element);
    }

    return this.productos;
  }
}

export const fakerAPI = new ProductosFakerAPI();
