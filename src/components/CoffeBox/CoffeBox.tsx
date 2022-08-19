


import storeItems from "../../data/items.json"
import { StoreItem } from '../StoreItem/StoreItem';
import { CoffeMenu } from "./style";

export function CoffeBox() {
    return(

        <CoffeMenu>

            <div>
                {storeItems.map(item => (
                    <div key={item.id}>
                        <StoreItem {...item} />
                    </div>
                 ))}

            </div>

            </CoffeMenu>
       
    );
}