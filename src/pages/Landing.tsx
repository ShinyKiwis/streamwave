import { Button, TextField, Typography } from "@mui/material";

const Landing = () => {
  return (
    <div className="absolute top-1/4 left-1/3 flex gap-4 flex-col text-blue-500">
      <div>
        <Typography variant="h1" className="font-normal">
          Stream Wave
        </Typography>
        <Typography variant="body1" className="text-2xl text-black">
          <span className="font-medium text-blue-500">Welcome.</span>
          This is a personal video call platform !
        </Typography>
      </div>
      <div className="mt-4 w-11/12">
        <TextField
          hiddenLabel
          variant="outlined"
          className="w-full mb-4 text-3xl"
          InputLabelProps={{
            className: "text-gray-400",
          }}
          placeholder="Enter meeting code"
          InputProps={{
            classes: {
              notchedOutline: "border-gray-400"
            },
          }}
        />
        <div className="flex gap-4 w-full">
          <Button
            variant="contained"
            className="text-xl px-8 py-4 bg-blue-500 rounded-xl"
          >
            Join a meeting
          </Button>
          <Button
            variant="outlined"
            className="text-xl px-8 py-4 text-blue-500 border-blue-500 rounded-xl ms-auto"
          >
            Host a meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
