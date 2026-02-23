import Header from "../components/Header";
import InputSearch from "../components/InputSearch";
import Footer from "../components/Footer";

function InitialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="text-center space-y-4 mt-8">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight drop-shadow-sm">
            Bem-vindo!
          </h1>
          <h2 className="text-md text-sky-600 font-medium">
            Utilize o buscador para encontrar a cidade desejada.
          </h2>
        </div>

        <InputSearch />

        <div className="bg-white p-8 md:p-10 text-slate-600 space-y-5 text-lg leading-relaxed text-center w-full">
          <p>
            Descubra o melhor dia, a roupa ideal e os passeios perfeitos com
            informações claras e atualizadas.
          </p>

          <div className="pt-6 mt-6">
            <p className="text-xl md:text-xl font-bold text-yellow-500">
              Grandes aventuras começam com a previsão certa.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InitialPage;
