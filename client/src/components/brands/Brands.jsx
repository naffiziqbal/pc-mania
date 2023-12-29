import Image from 'next/image';
import brandImg1 from './brands/image 33-1.png'
import brandImg2 from './brands/image 33-2.png'
import brandImg3 from './brands/image 33-3.png'
import brandImg4 from './brands/image 33-4.png'
import brandImg5 from './brands/image 33-5.png'
import brandImg6 from './brands/image 33-6.png'
import brandImg from './brands/image 33.png'
const Brands = () => {
    const imgSrc = [brandImg6, brandImg5, brandImg4, brandImg3, brandImg2, brandImg1, brandImg]
    return (
        <div className="min-h-fit w-full flex gap-4 justify-between items-center my-12">
            {
                imgSrc.map((data, idx) => <Image key={idx} src={data} width={100} height={100} alt='img' />)
            }
        </div>
    );
};

export default Brands;
