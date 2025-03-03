"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";
import { renderStars } from "@/app/utils/Stars";
import { IWebDeveloper } from "./types";

export const WebDeveloper = ({ onOpen }: IWebDeveloper) => {
  return (
    <Card className="py-4 w-full md:w-1/2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="mb-2 flex items-center">{renderStars()}</div>
        <small className="text-default-500">Diseño 100% personalizado</small>
        <h4 className="font-bold text-large">Desarrollo web</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/service-web.webp"
          width={270}
        />
      </CardBody>

      <div className="flex justify-end px-5">
        <Button className="text-black bg-secondary" size="sm" onPress={onOpen}>
          ¡Lo quiero!
        </Button>
      </div>
    </Card>
  );
};
