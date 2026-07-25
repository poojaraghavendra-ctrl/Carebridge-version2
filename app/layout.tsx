import type { Metadata } from "next";import "./globals.css";
export const metadata: Metadata={title:"CareBridge | Family Care Marketplace",description:"Groceries, medicines, medical equipment, pooja essentials and festival care boxes for families."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
