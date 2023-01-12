import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: calc(100% - 1.5rem);
    max-width: 1120px;
    
    margin: 0 auto;
    

    display: grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    @media (max-width:1120px){
        overflow-x: auto;
        
    }
`

interface SummaryCardProps {
    variant?: 'green' | 'red' | 'gray'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme.colors["gray-600"]};
    border-radius: 6px;
    padding: 2rem;
    min-width: 280px;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme.colors["gray-300"]};
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    background: ${props => props.variant === 'green' ? props.theme.colors["green-500"] : props.variant === 'red' ? props.theme.colors["red-500"] : props.theme.colors["gray-600"]};

    /*${props => props.variant === 'green' && css`
        background: ${props.theme.colors["green-700"]};
    `}*/
`