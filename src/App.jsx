
import { productss } from "./data";

function Productos({products,size}){
  return(
    <div>
        <div>
         <h3>{products.name}</h3>
         <h4>{products.slug}</h4>
         <p>{products.description}</p>
        </div>
        <div>
            <img src={products.images} alt={products.name} width={size}height={size}/>
            

        </div>
    </div>
  )
    
 
  
}
export default function Profile(){
    return(
        productss.map(products =>(
         <Productos
         key ={products.title}
         products={{
            name:products.name,
            description:products.description,
            image:products.images,
            slug:products.slug
            
         }}
         size={50}
         />
        ))
    )
}
    
