import Header from "@/components/shared/Header/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
