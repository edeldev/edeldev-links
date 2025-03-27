import { Tabs, Tab } from "@heroui/react";
import { AnimatedLinks, Carrusel, Services } from "./components";
import { LINKS } from "@/app/utils/links";
import { SERVICES } from "@/app/utils/Services";

export const TabsInfo = () => {
  return (
    <div className="flex w-full flex-col mt-6">
      <Tabs aria-label="Options">
        <Tab key="servicios" title="Servicios">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {SERVICES.map((service) => (
              <Services key={service.id} service={service} />
            ))}
          </div>
        </Tab>
        <Tab key="proyectos recientes" title="Proyectos recientes">
          <Carrusel />
        </Tab>
        <Tab key="enlaces" title="Enlaces">
          <AnimatedLinks
            items={LINKS}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </Tab>
      </Tabs>
    </div>
  );
};
