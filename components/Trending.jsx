const Trending = ({creators}) => {
  return (
    <div className="side-container">
      <div className="flex items-center justify-center  space-x-1">
        <p className="text-start font-bold">Trending !</p>
      </div>
      <div className="flex flex-col">
            {
                creators.map((creator) => (
                    <a className="hover:underline text-blue-600 font-semibold" href="#" key={creator.username}>{`#${creator.username}`}</a>
                ))
            }
      </div>
    </div>
  );
};

export default Trending;
