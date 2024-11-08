
export type Product = {
    name: string;
    price: number;
    stock: number;
    category: string;
    photo: string;
    _id: string;
  };
  
  export type ShippingInfo = {
    name:string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  
  export type CartItem = {
    productId: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };
  export type OrderItem = Omit<CartItem, "stock"> & { _id: string };
  
  export type Order = {
    orderItems: OrderItem[];
    shippingInfo: ShippingInfo;
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    status: string;
   
  };