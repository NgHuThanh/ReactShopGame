import { Box } from "@mui/material";

function Newest() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
      "main main . sidebar"
      "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: "main" }}>Newest physical listings</Box>
        <Box
          sx={{
            width: 0.2,
            height: 20,
            borderRadius: 5,
            bgcolor: "warning.main",
            "&:hover": {
              bgcolor: "warning.dark",
            },
            gridArea: "sidebar",
            textAlign: "center",
            padding: 1,
          }}
        >
          Show all
        </Box>
      </Box>
    </>
  );
}
export default Newest;
