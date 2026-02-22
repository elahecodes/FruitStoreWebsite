import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const Comments = lazy(() => import("../components/Comments"));
const Brands = lazy(() => import("../components/Brands"));
const Categories = lazy(() => import("../components/Categories"));
const ProductsOne = lazy(() => import("../components/ProductsOne"));
const ProductsTwo = lazy(() => import("../components/productsTwo"));
const ProductsThree = lazy(() => import("../components/ProductsThree"));
const ProductsFour = lazy(() => import("../components/ProductsFour"));
const Services = lazy(() => import("../components/Services"));
const Banner = lazy(() => import("../components/Banner"));

const SectionLoader = () => (
  <div className="w-full h-40 flex justify-center items-center">
    <div className="animate-pulse text-gray-800">در حال بارگذاری...</div>
  </div>
);

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <section ref={ref}>
      {inView ? (
        <Suspense fallback={<SectionLoader />}>{children}</Suspense>
      ) : (
        <SectionLoader />
      )}
    </section>
  );
};

const Home = () => {
  return (
    <main className="mb-20 mt-20">
      <LazySection>
        <Banner />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Categories />
      </LazySection>
      <LazySection>
        <ProductsOne />
      </LazySection>
      <LazySection>
        <ProductsThree />
      </LazySection>
      <LazySection>
        <ProductsTwo />
      </LazySection>
      <LazySection>
        <ProductsFour />
      </LazySection>
      <LazySection>
        <Brands />
      </LazySection>
      <LazySection>
        <Comments />
      </LazySection>
     
    </main>
  );
};

export default Home;
