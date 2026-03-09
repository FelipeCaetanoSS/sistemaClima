import { FaTaxi } from "react-icons/fa";
// corrigir aqui - fazer layout e inspirar no figma
function Distance() {
  return (
    <div>
    <div className="flex flex-1/3">
    <FaTaxi className="text-gray-600 w-12 h-12" />
        <span className="text-xl font-light">Layout de gastos</span>
      </div>
      <div className="flex flex-1/3">
      </div>
      <main className="flex-1">
        <div className="text-center space-y-4 mt-8"></div>
      </main>
    </div>
  );
}

export default Distance;
