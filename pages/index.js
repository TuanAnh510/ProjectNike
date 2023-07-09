import Banner from "@/components/Home";
import CarouselPage from "@/components/BannerSale";


export default function Home({ products }) {
    return (
        <main>
           <CarouselPage/>
           <Banner/>
        </main>
    );
}
