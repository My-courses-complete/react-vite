export default function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 rounded-lg left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5">
          Electronics
        </span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/17848710/pexels-photo-17848710/free-photo-of-animal-negro-retrato-caballos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
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
