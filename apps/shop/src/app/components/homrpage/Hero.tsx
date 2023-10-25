import { auth } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import "slick-carousel/slick/slick.css";
import ImageSlider from "../ui/image-slider";

const Hero = async () => {
  const flashSale = await prisma.flashSale.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      products: true,
    },
  });

  let products: any = [];
  flashSale.map((item) =>
    item.products.map((product) =>
      products.push({
        id: product.id,
        percent: item.percent,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
      })
    )
  );
  return (
    <div>
      {/* <div className="container pt-10 pb-10">
        <h2 className="text-center font-medium text-3xl">Flash Sale</h2>
      </div> */}
      <div className="container pt-6 lg:pt-0">
        <ImageSlider slidesData={products} />
      </div>
    </div>
  );
};

export default Hero;
