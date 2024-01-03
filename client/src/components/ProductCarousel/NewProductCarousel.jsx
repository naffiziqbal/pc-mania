import React from 'react';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import NewProducts from '../products/NewProducts';

const NewProductCarousel = ({ products }) => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {
                        products?.slice(0, 6)?.map(product => <NewProducts key={product?._id} product={product} />)
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default NewProductCarousel;
