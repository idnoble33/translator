import Styled from 'styled-components';
type Props = {
  variant: string;
};
export const CardContainer = Styled.div<Props>`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 330px;
  border-radius: 10px;
  border: 2px solid blue;
  background-color: ${props =>
    props.variant === 'alternateBackgroundColor'
      ? 'rebeccapurple'
      : 'lightgreen'};
`;
export const CardHeader = Styled.div`
  border-bottom: 2px solid blue;
  width: 100%;
  text-align: center;
  padding-top: 5px;
  font-weight: bold;
  height: 30px;
  background-color: lightblue;
  border-radius: 10px;


`;

export const CardContent = Styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
`;
export const ContentContainer = Styled.div`
  max-width: 50rem;
  margin: 10rem auto; 
`;
