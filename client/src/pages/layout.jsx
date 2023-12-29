import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen max_viewport">{children}</main>
      <Footer />

    </>
  );
}
