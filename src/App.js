import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative flex justify-center">
        <div className="indicator absolute -top-[60px]"></div>
        <div className="h-[500px] bg-[#b1bdce] w-full">
          <h1>Main</h1>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
