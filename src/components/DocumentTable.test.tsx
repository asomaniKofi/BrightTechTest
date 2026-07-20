import { fireEvent, render, screen } from "@testing-library/react";
import DocumentTable from "./DocumentTable";
import type { Item, Folder } from "../types/DoucmentTypes";

describe("DocumentTable", () => {
  test("clicking a folder item calls onSelectedFolder with that folder", () => {
    const onSelectedFolder = vi.fn();

    const folder: Folder = {
      type: "folder",
      name: "Expenses",
      files: [],
    };

    const items: Item[] = [
      folder,
      { type: "pdf", name: "Employee Handbook", added: "2017-01-06" },
    ];

    render(<DocumentTable data={items} onSelectedFolder={onSelectedFolder} />);

    // Folder row has primary text 'Expenses'
    fireEvent.click(screen.getByText("Expenses"));

    expect(onSelectedFolder).toHaveBeenCalledTimes(1);
    expect(onSelectedFolder).toHaveBeenCalledWith(folder);
  });

  test("non-folder item does not call onSelectedFolder when clicked", () => {
    const onSelectedFolder = vi.fn();

    const items: Item[] = [
      { type: "pdf", name: "Employee Handbook", added: "2017-01-06" },
    ];

    render(<DocumentTable data={items} onSelectedFolder={onSelectedFolder} />);

    fireEvent.click(screen.getByText("Employee Handbook"));

    expect(onSelectedFolder).not.toHaveBeenCalled();
  });
});
