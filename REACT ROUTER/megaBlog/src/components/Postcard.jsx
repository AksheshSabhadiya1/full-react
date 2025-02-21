import appwriteService from '../appwrite/conf'
import { Link } from "react-router-dom";

function Postcard({$id, title, featuredimage}){

    const imageurl = appwriteService.getFilePreview(featuredimage)

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {
                        imageurl ? (<img src={imageurl} 
                            alt={title}
                            className="rounded-xl" />) 
                            : <p>No image available</p>  
                    }
                </div>
                    <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default Postcard