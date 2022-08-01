import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #f6f0f0;
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    color: #3be996;

    .image {
        margin-right: 5px;
        font-size: 4rem;
        padding-bottom: 15px;
        
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: white;
        font-size: 18px;
        flex: 1;
        color: #3be996;
    }

    input::placeholder {
        color: #3be996;
    }
`;