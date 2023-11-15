import React, { useEffect, useState } from "react";
import { Label, Button, ButtonContainer, Container, Input, Title, InputContainer } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseGolfService } from '../services'

const UserPage = () => {
    const [buy, setBuy] = useState(0);
    const [stock, setStock] = useState(0);

    useEffect(() => {
        getStock();
      },[])
    
       const getStock = async () => {
         try {
             await UseGolfService().getStock()
             .then((res) => {
               console.log(res)
               setStock(res.stock)
             });
         } catch (error) {
           console.error('Error fetching get stock:', error);
         }
       };

    const handleBuy = async (props) => {
         try {
             await UseGolfService().buy(props)
             .then((res) => {
                toast.success("Dropping balls");
                console.log(res)
             });
         } catch (error) {
           console.error('Error fetching get stock:', error);
         }
       };

       return (
        <Container>
            <ToastContainer />
            <Title>
                <span style={{ color: '#ff8400' }}>GOLF </span>
                {window.innerWidth < 600 && <br/>}
                Vending 
                {window.innerWidth < 600 && <br/>}
                Machine
            </Title>
    
          <InputContainer>
            <Label>Buy:</Label>
            <Input
                type="text"
                onChange={(e) => setBuy(e.target.value)}
            />
         </InputContainer>
   
          <ButtonContainer>
            <Button onClick={() => handleBuy(buy)}>BUY</Button>
          </ButtonContainer>
        </Container>
      );
}

export default UserPage