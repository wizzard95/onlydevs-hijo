import { Icon } from "@iconify/react"
import { Header } from "../components/HomePageComponents/HeaderSticky"

export const HomePage = () => {
    return (
        <main className="flex min-h-screen bg-white dark:bg-bg-dark
        max-w-[1200] mx-auto">
            
            <section className="flex flex-col w-full h-screen">
             
                <article className="flex flex-col h-screen overflow-hidden border
                border-gray-200 border-t-0 border-b-0 dark:border-gray-600">
                    <Header />
                    
                        Principal
                </article>
                <article>Sidebar derecho</article>
            </section>

        </main>
    )
}