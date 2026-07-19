import FileSearchBar from "./components/FileSearchBar";
import DocumentTable from "./components/DocumentTable";
import useFiles from "./hooks/useFiles";
import { Button, Container, Stack, Typography } from "@mui/material";
import "./App.css";

function App() {
  const {
    displayedItems,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    openFolder,
    goBack,
    canGoBack,
  } = useFiles();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Bright HR
      </Typography>

      {canGoBack && (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button onClick={goBack}>← Back</Button>
        </Stack>
      )}

      <FileSearchBar
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <DocumentTable data={displayedItems} onSelectedFolder={openFolder} />
    </Container>
  );
}

export default App;
