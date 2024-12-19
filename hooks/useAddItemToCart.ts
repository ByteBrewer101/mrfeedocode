import cartState from "@/store/RecoilLogic/atoms"
import { useRecoilState } from "recoil"


interface inputTypes{
    HotelId:string,
    ItemId:string,
    quantity:number,
    price:number,
    
}

export function useAddItemToCart({HotelId,ItemId,quantity,price}:inputTypes){

    const [CurrCartState,setCartState] = useRecoilState(cartState)

    const currentItem = CurrCartState.find((item)=>item.ItemId===ItemId)

    const item = {
        HotelId,
        ItemId,
        quantity,
        price
    }

    if(!currentItem){
      setCartState((prevCartState) => [...prevCartState, item]);

    }
 

}