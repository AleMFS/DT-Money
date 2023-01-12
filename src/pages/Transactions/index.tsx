import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContexts";
import { dateFormatter, priceFormmater } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { MobileCount, PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TagSimple, CalendarBlank, CaretLeft, CaretRight } from 'phosphor-react'
import ReactPaginate from "react-paginate";



export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    const transactionCount = transactions.length
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageClick = (data: any) => {
        const currentPage = data.selected + 1;
        setCurrentPage(currentPage)
    }

    const itemPerPage = 5
    const start = itemPerPage * (currentPage - 1)
    const end = start + itemPerPage
    const transactionsPerPage = transactions.slice(start, end)



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
                        {transactionsPerPage.map(transaction => {
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
                                                <div className="date"> <CalendarBlank size={16} />{dateFormatter.format(new Date(transaction.createdAt))}</div>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>

                {transactionCount > itemPerPage ?
                    < ReactPaginate
                        //styles
                        className="container"
                        pageLinkClassName='containerNumber'
                        disabledClassName="arrowDisabled"
                        activeClassName="currentNumberPage"
                        previousClassName='arrowSelected'
                        nextClassName='arrowSelected'

                        breakLabel="..."
                        nextLabel={<CaretRight size={24} weight='bold' />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(transactions.length / itemPerPage)}
                        previousLabel={<CaretLeft size={24} weight='bold' />}
                    />
                    :
                    ''}


            </TransactionsContainer>
        </div >
    )
}