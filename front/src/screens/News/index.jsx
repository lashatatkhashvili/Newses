import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNewses } from "../../redux/actions/news.action";
import {
  selectNewses,
  selectNewsesStatus,
} from "../../redux/selectors/newsSelectors";
import Header from "../../components/Header";
import NewsItem from "../../components/NewsItem";
import LoaderWrapper from "../../components/LoaderWrapper";

const News = () => {
  const dispatch = useDispatch();
  const newsesData = useSelector(selectNewses);
  const status = useSelector(selectNewsesStatus);

  const newses = newsesData?.newses;

  useEffect(() => {
    if (!newsesData) {
      dispatch(getNewses({ page: 1, limit: 10 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <LoaderWrapper isLoading={!newsesData && status === "pending"}>
        {newses?.length && (
          <InfiniteScroll
            dataLength={newses.length}
            next={() =>
              dispatch(
                getNewses({ page: newsesData?.currentPage + 1, limit: 10 })
              )
            }
            hasMore={newsesData?.currentPage !== newsesData?.totalPages}
            loader={
              <div className="text-white mt-[10px] text-center">Loading...</div>
            }
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[16px] 
                         gap-y-[40px] px-[16px] my-[40px]"
            >
              {newses.map((data) => (
                <NewsItem data={data} key={data?._id} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </LoaderWrapper>
    </div>
  );
};

export default News;
