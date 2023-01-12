import { Sofa } from "./components/Sofa";

function App() {
  return (
    <div className="h-screen flex">
      <div className="w-full max-w-[875px] items-center m-auto flex gap-3 max-md:flex-col">
        <Sofa />
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <h1 className="font-light text-xs ">CÓDIGO: 42042</h1>
            <h1 className="font-semibold text-4xl font-crimson">
              Sofá Margot II - Rosé
            </h1>
            <h1>R$ 4.000 </h1>
          </div>
          <button className="w-2/4 flex items-center justify-center py-2 px-4 border-[0.5px] border-solid border-[#271A45] rounded-full mt-5">
            <h1 className="text-xs">ADICIONAR À CESTA</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
