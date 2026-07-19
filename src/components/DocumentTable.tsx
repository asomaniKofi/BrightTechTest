import {
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import type { Item, Folder } from "../types/DoucmentTypes";

interface TableProps {
  data: Item[];
  onSelectedFolder: (folder: Folder) => void;
}

export default function DocumentTable({ data, onSelectedFolder }: TableProps) {
  return (
    <List sx={{ bgcolor: "background.paper", borderRadius: 2 }}>
      {data.map((item) => {
        const isFolder = item.type === "folder";

        return (
          <ListItem key={item.name} disablePadding divider>
            <ListItemButton
              onClick={() => {
                if (isFolder) {
                  onSelectedFolder(item);
                }
              }}
              disabled={!isFolder}
            >
              <ListItemIcon>
                {isFolder ? (
                  <FolderIcon color="primary" />
                ) : (
                  <DescriptionIcon color="action" />
                )}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                secondary={
                  isFolder ? (
                    <Typography variant="body2" color="text.secondary">
                      Folder
                    </Typography>
                  ) : (
                    `Added: ${item.added}`
                  )
                }
              />

              <Chip
                label={isFolder ? "Folder" : item.type.toUpperCase()}
                color={isFolder ? "primary" : "default"}
                size="small"
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
