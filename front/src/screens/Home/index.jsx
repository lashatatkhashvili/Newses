import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center mt-[100px] px-[16px]">
        <p className="text-[#151411] text-[20px] md:text-[30px] text-center">
          Welcome to Our Website!
        </p>
        <p className="text-[#151411] text-[20px] md:text-[30px] text-center">
          Discover the Latest News and Stay Updated!
        </p>

        <p className="text-[#151411] text-[16px] md:text-[18px] mt-[24px] md:max-w-[60%] text-center">
          Welcome to our platform, where you can explore a wide range of news
          articles, stay informed on the latest trends, and connect with others.
          Our mission is to provide you with the most recent and relevant news,
          tailored to your interests.
        </p>
      </div>
    </>
  );
};

export default Home;
