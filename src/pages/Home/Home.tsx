import { Link } from "react-router-dom";
import shuchi from "../../assets/images/shuchi_carre.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="w-full min-h-96 bg-primary pt-28 relative">
        <div className="flex flex-row justify-around top-28 absolute">
          <div className="pl-28 flex flex-col gap-4  ">
            <h1 className="font-serif text-5xl text-secondary font-bold">
              Little Lemon
            </h1>
            <h2 className="text-slate-50 text-3xl">Chicago</h2>
            <p className="text-slate-50 text-xl">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
              <Link
                to="/booking"
                className={`bg-secondary text-primary py-2 px-4 
              rounded-md mt-4 cursor-pointer font-semibold 
              hover:border-2 hover:border-secondary 
              hover:bg-transparent hover:text-secondary`}
              >
                Reserve a table
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={shuchi}
              alt="shuchi"
              className="h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex pt-14 flex-col ">
        <div className="flex flex-row items-center gap-4 justify-between p-28">
          <h1 className="font-serif text-3xl">This weeks special!</h1>
          <div>
            <Link
              to="/menu"
              className={`
              bg-secondary text-primary py-2 px-4 
              rounded-md mt-4 cursor-pointer font-semibold 
              hover:border-2 hover:border-secondary 
              hover:bg-transparent hover:text-prymary`}
            >
              Online Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
