import { Box } from "@mui/material"
import { useSearchParams } from "react-router-dom";


const Products = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category');
    const search = searchParams.get('search')
    return (
        <Box>
            {category ? (<div>{category} </div>) : search ? (<div>{`${search + " results"} `}</div>) : (<div>all products</div>)}
        </Box>
    )
}

export default Products