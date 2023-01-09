import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton >
                    <X size={28} />
                </CloseButton>

                <form action="">

                <input type="text" placeholder='Descrição' />
                <input type="number" placeholder='Preço' />
                <input type="text" placeholder='Categoria' />

                <TransactionType>
                    <TransactionTypeButton variant='income' value='income'>
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant='outcome' value='outcome'>
                        <ArrowCircleDown size={24} />
                        Saída
                    </TransactionTypeButton>
                    
                </TransactionType>

                <button type='submit'>Cadastrar</button>

                </form>
                
                
            </Content>

        </Dialog.Portal>
    )
}