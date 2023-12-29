import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

    </>
  );
}
