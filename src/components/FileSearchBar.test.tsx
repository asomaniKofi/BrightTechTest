import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import FileSearchBar from "./FileSearchBar";
import type { SortBy } from "../hooks/useFiles";

describe("FileSearchBar", () => {
  test("typing in filter input calls setFilter", () => {
    const setFilter = vi.fn();

    render(
      <FileSearchBar
        filter=""
        setFilter={setFilter}
        sortBy={"name"}
        setSortBy={() => {}}
      />,
    );

    fireEvent.change(screen.getByLabelText("Filter by filename"), {
      target: { value: "holiday" },
    });

    expect(setFilter).toHaveBeenCalledTimes(1);
    expect(setFilter).toHaveBeenCalledWith("holiday");
  });

  test("changing sort select calls setSortBy", () => {
    const setSortBy = vi.fn();

    render(
      <FileSearchBar
        filter=""
        setFilter={() => {}}
        sortBy={"name"}
        setSortBy={setSortBy}
      />,
    );

    fireEvent.mouseDown(screen.getByLabelText("Sort By"));

    fireEvent.click(screen.getByText("Date Added"));

    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setSortBy).toHaveBeenCalledWith("date" satisfies SortBy);
  });
});
