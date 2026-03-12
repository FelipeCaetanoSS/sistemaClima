import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "react-day-picker/dist/style.css";

function WeatherCalendar({ onSelectDate }) {
  const [selected, setSelected] = useState(new Date());

  function handleSelect(date) {
    setSelected(date);
    onSelectDate(date);
  }

  return (
    <div className="flex flex-col items-center mt-6">

      {/* Data Selecionada */}
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        {format(selected, "dd 'de' MMMM yyyy", { locale: ptBR })}
      </h2>

      <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">

        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          locale={ptBR}
          className="text-slate-700"
          modifiersClassNames={{
            selected: "bg-blue-600 text-white rounded-xl",
            today: "text-blue-600 font-bold"
          }}
          classNames={{
            months: "flex flex-col",
            month: "space-y-4",
            caption: "flex justify-between items-center mb-4",
            caption_label: "text-lg font-semibold",
            nav_button:
              "bg-slate-100 hover:bg-blue-100 text-slate-700 p-2 rounded-xl transition",
            table: "w-full border-collapse",
            head_row: "flex justify-between",
            head_cell: "w-10 text-sm font-medium text-slate-500",
            row: "flex justify-between mt-2",
            cell: "w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-100 transition cursor-pointer"
          }}
        />

      </div>
    </div>
  );
}

export default WeatherCalendar;