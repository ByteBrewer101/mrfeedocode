import { atom } from "recoil";

// interface CartItem {
//   hotelId: string;
//   itemId: string;
//   itemPrice: number;
//   numberOfItems: number;
// }

interface CartItem {
  HotelId: string;
  ItemId: string;
  quantity: number;
  price: number;
}


const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [], 
});

export default cartState;
