"use client";

interface FinancialYearFilterProps {
  id: string;
  years: string[];
}

export default function FinancialYearFilter({
  id,
  years,
}: FinancialYearFilterProps) {
  function filterDocuments(selectedYear: string) {
    const section = document
      .getElementById(id)
      ?.closest(".tab_content_wrapper");

    if (!section) {
      return;
    }

    section.querySelectorAll<HTMLElement>("[data-year]").forEach((document) => {
      document.style.display =
        !selectedYear || document.dataset.year === selectedYear ? "" : "none";
    });
  }

  return (
    <>
      <label htmlFor={id}>{"Financial Year wise Filter"}</label>
      <select
        id={id}
        className="form-select"
        name={id}
        defaultValue=""
        onChange={(event) => filterDocuments(event.target.value)}
      >
        <option value="">{"All Years"}</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
}
