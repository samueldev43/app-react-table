import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;

table {
    max-width: 100%;
    -webkit-font-smoothing: antialiased;
    border-spacing: 0 0.5rem;
    margin: 0 auto;
    
    th {
        max-width: inherit;
        font-weight: 100;
        font-size: 25px;
        text-align: left;
        padding: 1rem 2rem;
        color: #969cb3;
    }

    td {
        max-width: inherit;
        font-size: 20px;
        font-weight: 200;
        background: #f3f3f3;
        padding: 1rem 2rem;
        color: #363f5f;
    }
}
`