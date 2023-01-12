import { useContext} from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContexts";
import { dateFormatter, priceFormmater } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { MobileCount, PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import {TagSimple,CalendarBlank } from 'phosphor-react'



export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    const transactionCount = transactions.length

    return (
        <div>
            <Header />
            <Summary />

            <MobileCount>
                <span>Transações</span>
                {`${transactionCount} itens`}
            </MobileCount>

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td>
                                        <div className="tdContainer">
                                            <div className="description">{transaction.description}</div>
                                            <div>
                                                <PriceHighLight variant={transaction.type}>
                                                    {transaction.type === 'outcome' && '- '}
                                                    {priceFormmater.format(transaction.price)}
                                                </PriceHighLight></div>
                                            <div className="CategoryAndDate">
                                                <div>{transaction.category}</div>
                                                <div className="date"> <CalendarBlank size={16}/>{dateFormatter.format(new Date(transaction.createdAt))}</div>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div >
    )
}