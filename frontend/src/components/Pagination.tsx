import {Link, useSearchParams} from "react-router-dom";

type PaginationObject = {
    total: number
    current: number
}
interface PaginationInterface {
    color?: string;
    extraClass?: string
    pagination?: PaginationObject
}

const Pagination = ({color='dark', extraClass='', pagination}:PaginationInterface) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setPage = (pageNumber:number) => {
        setSearchParams({page: pageNumber.toString()})
        document?.getElementById('top')?.scrollIntoView();
    }

    const changePage = (incrementBy:number) => {
        let pageNumber = searchParams.get("page");
        if (pageNumber) {
            let newPageNumber = Number(pageNumber) + incrementBy
            setSearchParams({page: (newPageNumber).toString()})
            document?.getElementById('top')?.scrollIntoView();
            return
        }
        setSearchParams({page: '2'})    //use is on first page initially
    }

    //if (pagination?.total === 0 || pagination?.total === 1) return null

    return(
        <div className={`pagination pagination--${color} ${extraClass}`}>
            {
        pagination?.current === 1 ?
                <div className="pagination-item pagination-item--inactive">&lt;</div>
                :
                <div onClick={() => changePage(-1)} className="pagination-item">&lt;</div>
            }
            {[...Array(pagination?.total)].map((e, i) => {
                i ++
                if (i === pagination?.current) {
                    return(<div className="pagination-item pagination-item--active" key={e}>{i}</div>)
                }
                return(<div onClick={() => setPage(i)} className="pagination-item" key={e}>{i}</div>)
            })}

            {
        pagination?.current === pagination?.total ?
                <div className="pagination-item pagination-item--inactive">&gt;</div>
                :
                <div onClick={() => changePage(1)} className="pagination-item">&gt;</div>
            }
        </div>
    )
}

export default Pagination;
