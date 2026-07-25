import Header from "./Header";import Footer from "./Footer";import WhatsAppButton from "./WhatsAppButton";
export default function PageShell({children}:{children:React.ReactNode}){return <main className="min-h-screen bg-[#FAF8EF] text-[#173B30]"><Header/>{children}<Footer/><WhatsAppButton/></main>}
