import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    position: relative;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }
    label {
        color: #3be996;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    .Lixeira {
        font-size: 1.7rem;
        cursor: pointer;
        position: absolute;
        left: 90%;
    }
`
));
