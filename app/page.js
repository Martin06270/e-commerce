"use client"

import Link from "next/link";
import link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
     <Link href="/cv">cv</Link>
     <Link href="/contact">Contact</Link>
     <link href="/jeu">Jeu</link>
    </main>
  );
}
