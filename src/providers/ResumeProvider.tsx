import { createContext, ReactNode, useEffect, useState } from "react";
import AppAxios from "../common/utils/AppAxios";

export type ResumeProviderProps = {
  children?: ReactNode;
};

type ResumeContextType = {
  anchorUrl: string;
};

export const ResumeContext = createContext<ResumeContextType>({
  anchorUrl: "",
});

const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [anchorUrl, setAnchorUrl] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchResume = async () => {
      if (anchorUrl) return;
      const response = await AppAxios.get("/downloads/resume.pdf", {
        responseType: "blob",
        signal: controller.signal,
      });
      const fileUrl = window.URL.createObjectURL(response.data);
      setAnchorUrl(fileUrl);
    };
    try {
      fetchResume();
    } catch (error) {}
    return () => controller.abort();
  }, [anchorUrl]);

  const value = {
    anchorUrl,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export default ResumeProvider;
