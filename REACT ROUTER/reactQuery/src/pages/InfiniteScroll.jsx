import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchusers } from "../API/Api";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer'

export default function InfiniteScroll() {

    const { data, fetchNextPage, hasNextPage, status, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchusers,
        getNextPageParam: (lastPage, allPages) => {                              // allpages:- No. of pages  & lastpage:- no. of data per page 
            return lastPage?.length === 10 ? allPages?.length + 1 : "undefined"
        }
    })

    // const handleScroll = () => {
    //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1

    //     if (bottom && hasNextPage) {
    //         fetchNextPage()
    //     }
    // }


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }

    // }, [hasNextPage])




    const { ref, inView } = useInView({
        threshold: 1
    })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, fetchNextPage])




    const handleTop = () => {
        fetchNextPage(data.pages.length=0)
    }


    if (status === 'loading') return <div>Loading.....</div>
    if (status === 'error') return <div>Error fetching data</div>

    return (
        <div>
            {
                data?.pages?.map((page, index) => (
                    // <ul key={index} className="grid grid-cols-2">
                    <ul key={index}>
                        {
                            page?.map((user) => (
                                <li key={user.id} style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <p>{user.login}</p>
                                    <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
            <div ref={ref}>
                {
                    isFetchingNextPage ? <h1>Loading Data....</h1> : hasNextPage ? <h1>Scroll Down to Load More.....</h1> : <h1>No More Users</h1>
                }
            </div>
            <div>
                <button className="w-fit fixed right-40 bottom-20" onClick={handleTop}>Go Top</button>
            </div>
        </div>
    )
}