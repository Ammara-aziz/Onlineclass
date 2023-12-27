import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {/* whenever you click on this link navigate to {'this page'} */}
      <Link href={"dashboard"}>React Learning</Link>
      
    </main>
  );
}
