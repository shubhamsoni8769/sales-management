import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import ProductDetailForm from "./ProductDetailForm/Form";
import ProductDetailTable from "./ProductDetailTable/ProductTable"


const ProductDeatilSetup = () => {
    const [showProductForm, setShowProductForm] = useState(false);
    const closeProductDetailModel = () =>setShowProductForm(false)
    

    const addProduct = () =>{
        setShowProductForm(true)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <>
            <Modal
                open={showProductForm}
                onClose={closeProductDetailModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}><ProductDetailForm /></Box>
            </Modal>
            <ProductDetailTable />
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>

    )
}

export default ProductDeatilSetup;