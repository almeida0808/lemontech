import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import {
  startOfDay,
  endOfDay,
  subDays,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { createStaticRanges } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export function ButtonDate() {
  const [open, setOpen] = useState(false);

  const [ranges, setRanges] = useState([
    {
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
      key: "selection",
    },
  ]);

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
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #374151",
        }}
      >
        📅 {ranges[0].startDate.toLocaleDateString()} -{" "}
        {ranges[0].endDate.toLocaleDateString()}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "48px",
            zIndex: 100,
          }}
        >
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
    </div>
  );
}
