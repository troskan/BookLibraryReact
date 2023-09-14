const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          <span id="react">React</span> + <span id="vite">Vite</span>
        </h1>
        <p>
          This is a React project that uses Vite. Project goal is to fetch all
          endpoints from{" "}
          <a
            target="_blank"
            href="https://github.com/troskan/BookLibraryAPI_MinimalAPI"
          >
            BookLibraryAPI
          </a>{" "}
          to train my abillity to use React.
        </p>
        <h3>
          <a className="" target="_blank" href="https://github.com/troskan">
            https://github.com/troskan
          </a>
        </h3>
      </div>
    </div>
  );
};
export default HomePage;
