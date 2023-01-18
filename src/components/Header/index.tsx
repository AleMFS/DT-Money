import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImg from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <a href="">
                <img src={LogoImg} alt="" />
                </a>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />

                </Dialog.Root>


            </HeaderContent>
        </HeaderContainer>
    )
}