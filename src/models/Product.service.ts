import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { Message } from "../libs/Error";
import { HttpCode } from "../libs/Error";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  ////////////////////////// SPA ////////////////////////////////

  ///////////////////////// SSR /////////////////////////////////
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error, model create product", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ProductService;
