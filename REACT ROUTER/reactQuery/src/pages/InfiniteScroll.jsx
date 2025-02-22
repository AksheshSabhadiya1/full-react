import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchusers } from "../API/Api";


export default function InfiniteScroll() {

    const {data} = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchusers,
        getNextPageParam: (lastPage, allPages)=>{
            console.log("lastpage: ",lastPage);
            console.log("allpage: ",allPages);

            return lastPage.length === 10 ? allPages.length + 1 : undefined
        }
    })

    return (
    <div>
        {
            data?.pages?.map((page, index) => (
                <div>
                <ul key={index}>
                {
                    page.map((user)=> {
                        <li key={user.id} style={{padding: '10px', border: '1px solid #ccc'}}>
                            <p>{user.login}</p>
                            <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                        </li>
                    })
                }
                </ul>
            </div>
            ))
        }
    </div> 
    )
}