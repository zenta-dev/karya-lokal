import { useTheme } from "next-themes";

const Config = () => {
  const { theme } = useTheme();

  let toastConfig = {};
  if (theme === "dark") {
    toastConfig = {
      style: {
        border: "1px solid #473a35",
        borderRadius: "10px",
        background: "#1b1614",
        color: "#fff",
      },
    };
  } else {
    toastConfig = {
      style: {
        border: "1px solid #333",
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    };
  }
};

export default Config;
