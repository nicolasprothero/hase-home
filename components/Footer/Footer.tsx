import { ReactNode } from "react";

export interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: "#ffff",
        padding: "12px 0px",
        color: "#000",
        width: "100%",
        display: "flex",
        fontSize: "12px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto",
      }}
    >
      {children}
    </footer>
  );
}
