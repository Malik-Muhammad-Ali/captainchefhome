import { Box, TextField, Typography, Button, Grid2 } from "@mui/material";

const Help = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        Get Started
      </Typography>

      {/* Form Fields */}
      <Grid2
        container
        spacing={2}
        sx={{
          maxWidth: "600px",
          width: "100%",
          marginBottom: 4,
        }}
      >
        {/* First Row */}
        <Grid2 item xs={12} sm={6} sx={{}}>
          <TextField fullWidth label="First Name" variant="outlined" required />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" variant="outlined" required />
        </Grid2>

        {/* Second Row */}
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            required
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            type="tel"
          />
        </Grid2>
      </Grid2>

      {/* Text Area */}
      <TextField
        fullWidth
        label="How can we help you?"
        variant="outlined"
        multiline
        rows={4}
        sx={{
          maxWidth: "600px",
          width: "100%",
          marginBottom: 4,
        }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          paddingX: 4,
          paddingY: 1.5,
          fontSize: "1rem",
          borderRadius: "8px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Help;
