export default function Card({ product }: CardProps) {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 rounded-lg left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5">
          {product.category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={product.images[0]} alt="headphones" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-sm font-medium">$300</span>
      </p>
    </div>
  );
}
