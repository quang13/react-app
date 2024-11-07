import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content-wrapper">
      <Header />
      {children}
    </main>
  );
}
