/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */
type Category = {
  id: string;
  name: string;
  photo?: string;
};
/* Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (строка)
 * - category (Категория)
 */
type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: string;
  category: Category;
};
/* Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 */
type Operation = Cost | Profit;
/* Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */
type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};
/* Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const productName = 'Example Product';
  const productId = '1';
  const productPhoto = 'https://productphoto.com/photo.jpg';
  const productDesc = '';
  const oldProdPrice = 100;
  const productPrice = '50$';
  const productCategory: Category = {
    id: '2',
    name: 'Category example',
  };

  const product: Product = {
    id: productId,
    name: productName,
    createdAt: createdAt,
    photo: productPhoto,
    desc: productDesc,
    oldPrice: oldProdPrice,
    price: productPrice,
    category: productCategory,
  };
  return product;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const productCategory: Category = {
    id: '2',
    name: 'Category example',
  };
  const cost: Cost = {
    id: '1',
    name: 'cost name',
    createdAt: createdAt,
    amount: 3,
    category: productCategory,
    type: 'Cost',
  };
  const operation: Operation = cost;
  return operation;
};
