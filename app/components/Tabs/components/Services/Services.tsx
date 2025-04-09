"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  useDisclosure,
} from "@heroui/react";
import { renderStars } from "@/app/utils/Stars";
import { ModalService } from "./components";
import { Fragment } from "react";
import { IServiceComponent } from "./types";

export const Services = ({ service }: IServiceComponent) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <ModalService isOpen={isOpen} onClose={onClose} service={service} />
      <Card
        className={`col-span-6 py-4 ${service.id === 2 ? "bg-[#0e0d0d]" : ""}`}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="mb-2 flex items-center">{renderStars()}</div>
          <small className="text-default-500">{service.sub}</small>
          <h4 className="font-bold text-large">{service.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 items-center">
          <Image
            alt={service.altImageService}
            className="object-cover rounded-xl"
            src={service.imageService}
            width={270}
          />
        </CardBody>

        <div className="flex justify-end px-5">
          <Button
            className="text-black bg-secondary"
            size="sm"
            onPress={onOpen}
          >
            ¡Lo quiero!
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};
