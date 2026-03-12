import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Header() {
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  function onClick() {
    navigate("/home");
  }
  useEffect(() => {
    const reloadTime = () => {
      const now = new Date();

      const dateTime = now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const resultado =
        dateTime.charAt(0).toUpperCase() + dateTime.slice(1) + " - " + time;

      setDate(resultado);
    };

    reloadTime();
    const interval = setInterval(reloadTime, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 md:h-24 transition-all border-b border-slate-200">
      <div className="flex items-center gap-3">
        <h1
          className="text-xl md:text-2xl text-sky-900 font-extrabold tracking-tight"
          onClick={onClick}
        >
          Sistema Clima
        </h1>
      </div>

      <div className="mt-3 md:mt-0">
        <p className="text-sm md:text-base text-slate-500 font-medium flex items-center gap-2">
          <span className="bg-slate-100 px-4 py-1.5 rounded-full text-slate-700 shadow-inner">
            {date}
          </span>
        </p>
      </div>
    </header>
  );
}

export default Header;
