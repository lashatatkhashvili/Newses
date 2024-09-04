const NewsItem = ({ data }) => {
  return (
    <div>
      <div className="w-full h-[360px] rounded-[16px]">
        <img
          src={data?.urlToImage}
          alt="news"
          className="w-full h-full object-cover rounded-[16px]"
        />
      </div>

      <div className="mt-[10px]">
        <p>Author: {data?.author}</p>
        <p className="font-bold">{data?.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
