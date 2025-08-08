export const BannerLinks = () => {
  return (
    <section className="pt-6 pb-10 space-y-5">
      <h3 className="text-xl text-gradient text-center font-bold">
        Empieza a ofrecer tus servicios webs
      </h3>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-5">
          <img
            src="/banner1.webp"
            alt="Plantilla de cotización web profesional"
          />
        </div>

        <div className="col-span-12 md:col-span-7 bg-black flex flex-col justify-between p-4">
          <h4 className="font-bold mb-10 md:mb-0">
            Plantilla de Cotización Web Profesional
          </h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">MXN 100</span>
            <a
              href="https://wa.me/8123697420/?text=Hola,%20quiero%20comprar%20la%20plantilla"
              target="_blank"
              className="px-5 py-1 bg-white rounded-lg text-black text-center hover:bg-white/80 transition-colors duration-300"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
