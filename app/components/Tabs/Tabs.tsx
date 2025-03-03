"use client";
import { Tabs, Tab, useDisclosure } from "@heroui/react";
import { ModalService } from "./components/Services/components";
import { AnimatedLinks, Carrusel, WebDeveloper } from "./components";
import { LINKS } from "@/app/utils/links";

export const TabsInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex w-full flex-col mt-6">
      <Tabs aria-label="Options">
        <Tab key="servicios" title="Servicios">
          <ModalService isOpen={isOpen} onClose={onClose} />
          <WebDeveloper onOpen={onOpen} />
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
