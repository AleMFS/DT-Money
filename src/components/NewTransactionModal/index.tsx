import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { TransactionsContext } from '../../contexts/TransactionsContexts';
import { api } from '../../libs/axios';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

interface newTransactionForm {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome'
}

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)

    const { control, register, handleSubmit, reset } = useForm<newTransactionForm>()

    async function handleCreateteste(data: newTransactionForm) {
        const { category, description, price, type } = data

        await createTransaction({
            category,
            description,
            price,
            type
        })

        reset()
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