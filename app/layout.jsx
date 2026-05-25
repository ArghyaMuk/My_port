import "./globals.css";

export const metadata = {
  title: "Arghya Mukherjee — Azure Cloud & DevOps Engineer",
  description: "Portfolio of Arghya Mukherjee. Azure infrastructure, Terraform, Kubernetes, and CI/CD automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
