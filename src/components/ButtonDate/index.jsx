import { useState } from "react";
import { DateRangePicker } from "react-date-range"; // biblioteca responsavel por renderizar o calandario
import {
  // importa funções da biblioteca date-fns para manipular as datas
  startOfDay,
  endOfDay,
  subDays,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { createStaticRanges } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { Container } from "./styles";

export function ButtonDate({ ranges, setRanges, isDesktop }) {
  const [open, setOpen] = useState(false);

  const staticRanges = createStaticRanges([
    {
      label: "Hoje",
      range: () => ({
        startDate: startOfDay(new Date()),
        endDate: endOfDay(new Date()),
      }),
    },
    {
      label: "Últimos 7 dias",
      range: () => ({
        startDate: startOfDay(subDays(new Date(), 6)),
        endDate: endOfDay(new Date()),
      }),
    },
    {
      label: "Últimos 30 dias",
      range: () => ({
        startDate: startOfDay(subDays(new Date(), 29)),
        endDate: endOfDay(new Date()),
      }),
    },
    {
      label: "Este mês",
      range: () => ({
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth(new Date()),
      }),
    },
  ]);

  return (
    <Container>
      <button id="dateButton" onClick={() => setOpen(!open)}>
        📅{" "}
        {isDesktop &&
          ranges?.[0]?.startDate &&
          ranges?.[0]?.endDate &&
          `${ranges[0].startDate.toLocaleDateString()} - ${ranges[0].endDate.toLocaleDateString()}`}
      </button>

      {open && (
        <div id="popUp">
          <DateRangePicker
            ranges={ranges}
            onChange={(item) => setRanges([item.selection])}
            staticRanges={staticRanges}
            inputRanges={[]}
            showSelectionPreview
            moveRangeOnFirstSelection={false}
            months={1}
            direction="horizontal"
          />
        </div>
      )}
    </Container>
  );
}
