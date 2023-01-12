import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContexts";

interface SearchFormSchema {
    query: string
}

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext)
    const {
        register,
        handleSubmit,        
        formState: { isSubmitting }
    } = useForm<SearchFormSchema>()

    async function handleSearchTransactions(data: SearchFormSchema) {
        await fetchTransactions(data.query)
    }
    return (
        <SearchFormContainer onChangeCapture={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
                minLength={3}
                
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                <span>Buscar</span>
            </button>
        </SearchFormContainer>
    )
}