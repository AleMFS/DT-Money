import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

interface newTransactionForm {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome'
}

export function NewTransactionModal() {
    const { control, register, handleSubmit } = useForm<newTransactionForm>()

    function handleCreateteste(data: newTransactionForm) {
        console.log(data)
    }
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton >
                    <X size={28} />
                </CloseButton>

                <form action="" onSubmit={handleSubmit(handleCreateteste)}>

                    <input {...register('description')} type="text" placeholder='Descrição' />
                    <input {...register('price', { valueAsNumber: true })} type="number" placeholder='Preço' />
                    <input {...register('category')} type="text" placeholder='Categoria' />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange}>
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>

                                </TransactionType>
                            )
                        }}
                    />

                    <button type='submit'>Cadastrar</button>

                </form>


            </Content>

        </Dialog.Portal>
    )
}