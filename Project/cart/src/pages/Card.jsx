import { useQuery } from '@tanstack/react-query'
import { fetchAllData } from '../API/API'

function Card() {

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllData
    })
    console.log("data: ", data);




    return (
        <div className='flex flex-wrap justify-evenly relative top-20'>
            {
                data?.map((item) => {
                    const { id, title, price, image } = item

                    return (
                        <div key={id} className='border inline-block m-2 max-w-xs rounded-md shadow-md'>
                            <div className='min-w-xs min-h-80 flex flex-wrap justify-center items-center'>
                                <div className='max-w-50 max-h-60 relative -top-15 '>
                                    <img src={image} className='w-8/10 ml-5 mt-10 object-center object-cover' />
                                </div>
                            </div>
                                <div className='text-center relative -top-5 w-full h-25'>
                                    <p>{title}</p>
                                    <p>Price: {price}</p>
                                </div>
                            <div className='flex justify-center relative bottom-5'>
                                <button className='inline-block border text-white hover:bg-blue-300 mx-3 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card