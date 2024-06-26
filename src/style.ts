
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonType{
    left: number;
    width: string;
}

interface ButtonDeleteType{
    opacity: number;
}


const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30em;
    box-shadow: 0px 29px 25px 0px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
`;

const ContainerList = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
`;

const Titulo = styled.h1`
    font-size: 50px;
    text-align: center;
`;

const Input = styled.input`
    padding-left: 12px;
    padding-right: 7px;
    width: 16.5em;
    height: 2.7em;
    font-size: 25px;
    border-left: none;
    border-bottom:1px solid #ededed ;
    border-top:1px solid #ededed ;
    border-right:1px solid #ededed ;
    &:active{
        border-color: red;
    }
`;

const IconContainer = styled.div`
     margin-top:10px;
    font-size:30px;
    color:#555;
    transition:all 200ms ease-in-out;
`;

const Icon = styled(FontAwesomeIcon)``;

const LabelCheckbox = styled.label`
    margin-left: -1px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    cursor:pointer;
    border:${props => props.id != "checked" ? '2px solid #0d0df1' : '2px solid #ddd'};
    background:#fff;
    text-align:center;
    transition:all 200ms ease-in-out;
    border-radius:1px;
    border: none;
`;

const CheckBoxContainer = styled.div`
   width: 47px;
   height: 70px;
`;

const CheckAllButton = styled.input.attrs({type:'checkbox'})`
    display: none;
`;


const Ul = styled.ul`
    margin-top: 0px;
    width: 100%;
`;

const Li = styled.li`
    margin-left: -20px;
    width: 29.4em;
    height: 9vh;
    padding-left: 0.5em;
    display: flex;
    flex-direction: row;
    border:1px solid #ededed;
    list-style: none;
    justify-content: center space-evenly;
    align-items: center;
    background-color: #FFFFFF;
`;
const TextList = styled.p`
    margin-left: 20px;
    font-size: 20px;
`;

const CheckList = styled.input.attrs({type:'checkbox'})`
    display: none;
`;

const LabelCheckList = styled.label`
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    margin-left: 10px;
`;

const SpanCheckList = styled(FontAwesomeIcon)`
    height: 21px;
    width: 21px;
`;

const ListMethods = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 30em;
    height: 9vh;
    margin-top: -15px;
`;
const Methods = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 30px;
    margin-left: 20px;
    font-size: 15px;
`;  

const ButtonsMehotds = styled.button`
    transition: 100ms;
    border: none;
    width: 100%;
    height: 5vh;
    background-color: transparent;
    font-size: 14px;
    &:hover{
        border: 1px solid #DB7676;
        border-radius: 5px;
        transition: 100ms;
    }
    &:checked{
        box-shadow:  -1px -1px 11px #bebebe,
             -1px -1px 11px #bebebe;
        border:1px solid #DB7676;
    }
`;

const ButtonClear = styled.button`
    transition: 100ms;
    border: none;
    width: 100%;
    height: 5vh;
    background-color: transparent;
    font-size: 14px;
    &:hover{
        text-decoration: underline;
    }
`;

const AnimationButton = styled.div<ButtonType>`
    position: absolute;
    height: 28px;
    top: 1px;
    z-index: 0;
    background-color: transparent;
    border: 1px solid #DB7676;
    width: ${(props) => props.width};
    left: ${(props) => props.left}px;
    border-radius: 3px;
    transition: 100ms;
`;

const CountItemsLeft = styled.p`
    font-size: 14px;
`;

const LabelDeleteTarefa = styled.label`
`;

const DeleteTarefa = styled(FontAwesomeIcon)<ButtonDeleteType>`
    opacity:${(props) => props.opacity};
    transition: 100ms;
    position: absolute;
    right: 500px;
`;

const InputEdicao = styled.input.attrs({type: 'text'})`
    padding-left: 14px;
    padding-right: 7px;
    width: 19em;
    height: 2em;
    font-size: 25px;
    border-left: none;
    border-bottom:1px solid #ededed ;
    border-top:1px solid #ededed ;
    border-right:1px solid #ededed ;
    &:active{
        border-color: red;
    }
`;

export{
    Input,
    Titulo,
    Container,
    CheckAllButton,
    LabelCheckbox,
    CheckBoxContainer,
    IconContainer,
    Icon,
    Ul,
    Li,
    TextList,
    ContainerList,
    CheckList,
    LabelCheckList,
    SpanCheckList,
    ListMethods,
    Methods,
    ButtonsMehotds,
    AnimationButton,
    ButtonClear,
    CountItemsLeft,
    DeleteTarefa,
    LabelDeleteTarefa,
    InputEdicao
}
