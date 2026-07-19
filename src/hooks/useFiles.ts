import { useMemo, useState } from "react";
import { documents } from "../data/DocumentData";
import type { Item, Folder } from "../types/DoucmentTypes";

export type SortBy = "name" | "date";

export default function useFiles() {
  const [history, setHistory] = useState<Item[][]>([]);
  const [currentItems, setCurrentItems] = useState<Item[]>(documents);

  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("name");

  const openFolder = (folder: Folder) => {
    setHistory((prev) => [...prev, currentItems]);
    setCurrentItems(folder.files);
  };

  const goBack = () => {
    if (!history.length) return;

    const previous = history[history.length - 1];

    setCurrentItems(previous);
    setHistory((prev) => prev.slice(0, -1));
  };

  const displayedItems = useMemo(() => {
    const filtered = currentItems.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      // Folders first when sorting by date
      if (a.type === "folder") return -1;
      if (b.type === "folder") return 1;

      return new Date(b.added).getTime() - new Date(a.added).getTime();
    });
  }, [currentItems, filter, sortBy]);

  return {
    displayedItems,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    openFolder,
    goBack,
    canGoBack: history.length > 0,
    useFiles,
  };
}
