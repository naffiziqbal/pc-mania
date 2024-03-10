import { addProduct } from '@/utils/APIs';
import handleUploadImage from '@/utils/handleUploadImage';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import DashboardLayout from '@/components/Dashboard/DashboadLayout';


const AddProducts = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleFormSubmit = async (productData) => {
        const image = productData.productImage[0]
        const formData = new FormData()
        formData.append("image", image)


        const name = productData.productName;
        const description = productData.productDescription;
        const price = productData.productPrice
        const category = productData.productCategory
        try {
            const uploadImage = await handleUploadImage(formData)
            if (uploadImage.status) {
                const { data } = await addProduct({ name, description, price, category, image: uploadImage.data.url, stock: true })
                if (data.success) {
                    toast('Product Added Successfully')
                    reset()
                }
            }
        } catch (error) {
            toast(error?.response?.data?.message || 'Product Creation Failed')
        }
    }
    return (
        <div className='w-full'>
            <h3 className='text-2xl font-semibold'>Add Product</h3>
            <form className=' *:my-4 w-full' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='w-full'>
                    <label htmlFor="product-name">
                        <input type="text"
                            name='productName'
                            {...register('productName')}
                            required={true}
                            placeholder='name of the product'
                            aria-label='product name'
                            className='w-full rounded-md  p-3 border-blue-500 border outline-none' />
                    </label>
                </div>
                <div>
                    <label htmlFor="product-category">
                        <input type="text"
                            required={true}
                            {...register('productCategory')}

                            aria-label='product category'
                            name='productCategory'

                            placeholder='product category' className='w-full rounded-md  p-3 border-blue-500 border outline-none' />
                    </label>
                </div>
                <div>
                    <label htmlFor="product-description">
                        <textarea type="text"
                            name='productDescription'
                            required={true}
                            {...register('productDescription')}
                            rows={10}
                            aria-label='product description'
                            placeholder='product description' className=' w-full rounded-md  p-3 border-blue-500 border outline-none' />
                    </label>
                </div>
                <div>
                    <label htmlFor="product-price">
                        <input type="number"
                            name='productPrice'
                            aria-label='product price'
                            {...register('productPrice', { valueAsNumber: true })}
                            required={true}
                            placeholder='price' className=' w-full rounded-md  p-3 border-blue-500 border outline-none' />
                    </label>
                </div>
                <div>
                    <label htmlFor="product-image">
                        <input type="file"
                            {...register('productImage')}
                            name='productImage'
                            aria-label='product image'
                            required={true}
                            placeholder='image' className=' w-full rounded-md  p-3 border-blue-500 border outline-none' />
                    </label>
                </div>
                <input type="submit" className='p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer' value='Add Product' />
            </form>
        </div >
    );
};

export default AddProducts;

