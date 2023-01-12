import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: calc(100% - 1.5rem);
    max-width: 1120px;
    margin: 4rem auto 0;

    @media (max-width:450px){
        margin: 0 auto ;
    }
   
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 0.5rem;

  
        
     .tdContainer{
        width: 100%;
        background: ${props => props.theme.colors["gray-700"]};
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        display: grid;
        grid-template-columns: 3fr 1fr 2fr;
      
        
        >div{
            padding: 1.25rem 2rem;  
        }
        .CategoryAndDate{
            flex: 1;
            display: flex;
            justify-content: space-between;
            gap: 4rem;
            margin: 0 2rem;       
        
            color: ${props => props.theme.colors["gray-500"]};
            .date{
                display: flex;
                align-items: center;
                gap: 0.25rem;

                
            }
            
        }

               
        }

        @media (max-width:450px){
            .tdContainer{
                display: flex;
                flex-direction: column;
                height: 140px;
                padding: 1rem;
                

                >div{
                    padding: 0.5rem;
                }
                .CategoryAndDate{
                    margin: 0;
                }

            } 
        
           
            
          
        }
        /*}
         padding: 1.25rem 2rem;
         background: ${props => props.theme.colors["gray-700"]};

         &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
         }
         td{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
         }*/
    

    
`
interface PriceHighLightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme.colors["green-300"] : props.theme.colors["red-300"]};

    @media (max-width:450px){
        font-weight: bold;
        font-size: 1.25rem;
    }
`

export const MobileCount = styled.div`
    display: none;

@media (max-width:450px){
    width: calc(100% - 1.5rem);
    margin: 1.5rem auto;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors["gray-500"]};

    span{
        color: ${props => props.theme.colors["gray-300"]};
    }


}

`