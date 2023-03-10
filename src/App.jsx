import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-slate-50">
      <header className="bg-slate-800 py-4">
        <h1 className="text-center text-4xl text-white">CV Generator</h1>
      </header>
      <Body />
      <footer className="bg-slate-800 py-4">
        <h4 className="text-center text-white">
          Copyright &#169; {new Date().getFullYear()}{" "}
          <a href="https://github.com/adnansyed101" target='_blank'>Md Adnan</a>{" "}
        </h4>
      </footer>
    </div>
  );
};

export default App;
