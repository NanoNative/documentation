import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export default function DetailDocumentation() {
    return (
        <div>
            <Header />
            <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
                <h1 className="text-3xl font-bold">Documentation</h1>
                <p className="mt-4">This is the documentation page. Content will be added here.</p>
            </main>
            <Footer />
        </div>
    );
}

