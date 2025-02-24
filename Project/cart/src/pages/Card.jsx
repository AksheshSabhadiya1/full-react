import { useQuery } from '@tanstack/react-query'
import { fetchAllData } from '../API/API'

function Card() {

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllData
    })
    console.log("data: ", data);

    return (
        <div className="w-full min-h-80 bg-gray-300">
            <div>
                {
                    data?.map((item) => {
                        const { id, title, price, description, category, image } = item
                        return (
                            <li key={id} className='float-left flex flex-wrap flex-col w-1/3 border mb-4'>
                                <div className='w-1/3 h-1/2 object-fit align-middle overflow-hidden bg-red-300'>
                                    <img src={image} className='w-full' />
                                </div>
                                <div className='flex flex-wrap m-3 text-start'>
                                    <p>Title: {title}</p>
                                    <p>Price: {price}</p>
                                    {/* <p>Description: {description}</p> */}
                                    <p>Category: {category}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card