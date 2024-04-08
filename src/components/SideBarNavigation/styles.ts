import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 435px;
    height: vh;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 20px;
        font-weight: bolder;
        
        :first-child{
            margin-top: 15px;
        }
    }
`;

export const ProfileIcon = styled.img`
    width: 135px;
    height: 135px;
    background-color: white;
    border-radius: 100px;
`;
