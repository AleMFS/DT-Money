import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: calc(100% - 1.5rem);
    max-width: 1120px;
    margin: 4rem auto 0;
   
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    //margin-top: 0.5rem;

    td{
         padding: 1.25rem 2rem;
         background: ${props => props.theme.colors["gray-700"]};

         &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
         }
         &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
         }
    }
`
interface PriceHighLightProps{
    variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme.colors["green-300"]: props.theme.colors["red-300"]};
`