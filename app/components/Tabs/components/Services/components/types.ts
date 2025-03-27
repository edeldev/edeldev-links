import { IService } from "@/app/interface/service";

export interface IModalService {
  isOpen: boolean;
  onClose: () => void;
  service: IService;
}
