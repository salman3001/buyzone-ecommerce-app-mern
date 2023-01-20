import { Box } from "@mui/material"
import { useSearchParams } from "react-router-dom";


const Products = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category');
    const search = searchParams.get('search')
    const outOfStock = searchParams.get('outOfStock')
    return (
        <Box>{
            category ? (<div>{category} </div>)
                : search ? (<div>{search + " results"}</div>) :
                    outOfStock ? (<div>out fo stck products</div>)
                        : (<div>all products</div>)
        }
        </Box>
    )
}

export default Products