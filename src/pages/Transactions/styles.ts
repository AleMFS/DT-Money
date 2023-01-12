import { ReactPaginateProps } from 'react-paginate'
import styled from "styled-components";


export const TransactionsContainer = styled.main`
    width: calc(100% - 1.5rem);
    max-width: 1120px;
    margin: 4rem auto 0;

    @media (max-width:450px){
        margin: 0 auto ;
    }

 
    // pagination

    .container{
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        list-style: none;

        li{
            width: 2.5rem;
            height: 2.5rem;
            
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center; 
            background: ${props => props.theme.colors['gray-600']};
            border-radius: 6px;
           
        }
        
        .currentNumberPage{
            color: ${props => props.theme.colors['gray-100']};
            background: ${props => props.theme.colors['green-700']};
            border-radius: 6px;
        }  
         
        .containerNumber{
            width: 2.5rem;
            height: 2.5rem;
            
            
            display: flex;
            justify-content: center;
            align-items: center;
        }  
        .arrowSelected{
            color: ${props => props.theme.colors['green-500']};
            background: transparent;
            
        }
        .arrowDisabled{
            color: ${props => props.theme.colors['gray-600']};
            background: transparent;
        } 
        
       
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
            position: relative;
            flex: 1;
            display: flex;
            justify-content: space-between;
            gap: 4rem;
            margin: 0 2rem;       
        
            color: ${props => props.theme.colors["gray-300"]};
            .date{
                display: flex;
                align-items: center;
                
                gap: 0.25rem;                
            }
            .trash{
                position: absolute;
                right: -0.75rem;
                

                button{
                    border: none;
                    background: transparent;
                    color: ${props => props.theme.colors['gray-300']};
                    cursor: pointer;

                    &:hover{
                    color: ${props => props.theme.colors['red-300'] };

                }
            }
                }

                
        }       

               
        }        

        @media (max-width:1130px){
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
                    align-items: center;
                    color: ${props => props.theme.colors["gray-500"]};

                    .trash{
                        position: absolute;
                        top: -4rem;
                        right: 1rem;
            }
                    
                }

            }         
                 
        }
     
    

    
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

