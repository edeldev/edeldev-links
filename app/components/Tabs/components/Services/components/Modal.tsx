"use client";
import { Fragment } from "react";
import { MODAL_SERVICES } from "@/app/utils/ModalServices";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Chip,
  Avatar,
  AvatarGroup,
} from "@heroui/react";
import {
  IconDeviceLaptop,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { IModalService } from "./types";
import { MODAL_CHIP } from "@/app/utils/ModalChip";
import { AVATARS } from "@/app/utils/ModalAvatar";

export const ModalService = ({ isOpen, onClose }: IModalService) => {
  return (
    <Modal
      backdrop={"blur"}
      isOpen={isOpen}
      onClose={onClose}
      className="bg-bg-box w-auto mx-10 mb-[2rem] md:mx-0 md:w-full"
      size="sm"
    >
      <ModalContent>
        {(onClose) => (
          <Fragment>
            <ModalHeader className="flex gap-3 items-center">
              <IconDeviceLaptop className="text-primary" stroke={1} size={35} />
              <p className="text-gradient font-bold">Desarrollo web completo</p>
            </ModalHeader>
            <Divider className="bg-white" />
            <ModalBody className="mt-3">
              {MODAL_SERVICES.map((info) => (
                <div key={info.id} className="flex items-center gap-2">
                  <Fragment>
                    <IconRosetteDiscountCheckFilled
                      size={20}
                      stroke={1}
                      className="text-secondary"
                    />
                    <p className="text-primary">{info.title}</p>
                  </Fragment>
                </div>
              ))}

              <div className="mt-3 flex flex-col md:flex-row gap-2">
                {MODAL_CHIP.map((chip) => (
                  <Chip
                    key={chip.id}
                    color={chip.color}
                    className={chip.colorText}
                    variant={chip.variant}
                    startContent={chip.icon}
                  >
                    {chip.text}
                  </Chip>
                ))}
              </div>

              <p className="text-center text-primary mt-3 mb-1 text-xs">
                + 50 personas lo amaron
              </p>

              <div className="flex gap-4 items-center justify-center">
                <AvatarGroup isBordered>
                  {AVATARS.map((avatar) => (
                    <Avatar key={avatar.id} src={avatar.src} size="sm" />
                  ))}
                </AvatarGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="secondary"
                className="text-black font-bold"
                onPress={() =>
                  window.open(
                    "https://wa.me/8123697420/?text=Hola,%20quiero%20un%20proyecto%20web",
                    "_blank"
                  )
                }
              >
                LO QUIERO
              </Button>
            </ModalFooter>
          </Fragment>
        )}
      </ModalContent>
    </Modal>
  );
};
