import { createContext, ReactNode, useEffect, useRef, useState } from "react";
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

  const effectHasRun = useRef(false);

  useEffect(() => {
    if (effectHasRun.current) return;
    const fetchResume = async () => {
      try {
        const response = await AppAxios.get("/downloads/resume.pdf", {
          responseType: "blob",
        });
        const fileUrl = window.URL.createObjectURL(response.data);
        setAnchorUrl(fileUrl);
      } catch (error) {}
    };
    fetchResume();

    return () => {
      effectHasRun.current = true;
    };
  }, []);

  const value = {
    anchorUrl,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export default ResumeProvider;
