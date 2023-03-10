import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContexts";

interface SearchFormSchema {
    query: string
}

export function SearchForm() {
    const [inputValue, setInputVelue] = useState('')
    const { fetchTransactions } = useContext(TransactionsContext)
    const {
        register,
        handleSubmit,        
        formState: { isSubmitting }
    } = useForm<SearchFormSchema>()

    function changeSearch(value:string){
        setInputVelue(value) 
        if(value === ''){
            handleSearchTransactions({query: value})
        }
    }

    async function handleSearchTransactions(data: SearchFormSchema) {
        await fetchTransactions(data.query)
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
                minLength={3}
                value={inputValue}
                onChange={(event) => changeSearch(event.target.value)}
                
                
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                <span>Buscar</span>
            </button>
        </SearchFormContainer>
    )
}