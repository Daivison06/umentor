import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import UserForm from "@/components/user/form";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ModalProps } from "@/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";


const Modal = ({open, setOpen}: ModalProps) => {
  const ToggleOpen = () => {
    setOpen(!open)
  }

  const { ref } = useClickOutside<HTMLDivElement>({
    onOutside: ToggleOpen,
  })

  return (
    <>
      <Dialog open={open}>
        <DialogContent ref={ref}>
          <DialogHeader>
            <DialogTitle>Cadastro de usuários</DialogTitle>
            <DialogDescription>
              Digite os dados do usuário nos campos abaixo:
            </DialogDescription>
            <DialogClose onClick={ToggleOpen} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
            </DialogClose>
          </DialogHeader>
          <UserForm toggleOpen={ToggleOpen} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Modal
