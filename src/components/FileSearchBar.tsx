import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import type { SortBy } from "../hooks/useFiles";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
}

export default function FileSearchBar({
  filter,
  setFilter,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="Filter by filename"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="date">Date Added</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
