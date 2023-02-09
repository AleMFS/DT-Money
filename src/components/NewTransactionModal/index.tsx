import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TransactionsContext } from '../../contexts/TransactionsContexts';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

interface newTransactionForm {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome'
}

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)
    const [selectedValue, setSelectedValue] = useState<string>('');
    const { register, handleSubmit, reset } = useForm<newTransactionForm>()

    async function handleCreateteste(data: newTransactionForm) {

        const { category, description, price, type } = data

        await createTransaction({
            category,
            description,
            price,
            type
        })
        reset()
        setSelectedValue('')
        
    }



    function handleSelected(e: any) {
        setSelectedValue(e.target.value)

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

                    <input {...register('description')} type="text" placeholder='Descrição' required />
                    <input {...register('price', { valueAsNumber: true })} type="number" placeholder='Preço' />
                    <input {...register('category')} type="text" placeholder='Categoria' required minLength={3} />


                    <TransactionType  >
                        <div className='income'>
                            <input
                                {...register('type',)}
                                id='income'
                                type='radio'
                                value='income'
                                onClick={e => handleSelected(e)}
                                required


                            />
                            <TransactionTypeButton htmlFor="income" variant='income' className={selectedValue === 'income' ? 'selected' : ''}>
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>
                        </div>
                        <div className='outcome'>
                            <input
                                {...register('type')}
                                id='outcome'
                                type='radio'
                                value="outcome"
                                onClick={e => handleSelected(e)}


                            />
                            <TransactionTypeButton htmlFor="outcome" variant='outcome' className={selectedValue === 'outcome' ? 'selected' : ''}>
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                        </div>


                    </TransactionType>

                    <button type='submit'>Cadastrar</button>

                </form>


            </Content>

        </Dialog.Portal>
    )
}