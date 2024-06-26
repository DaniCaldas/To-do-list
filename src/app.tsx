import { useEffect, useState } from "react";
import {CheckAllButton, Container, Input,Ul, LabelCheckbox, CheckBoxContainer, Icon, ContainerList, ListMethods, ButtonsMehotds, Titulo, AnimationButton, ButtonClear, CountItemsLeft, Methods} from "./style"
import axios from "axios";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Link, Route,BrowserRouter as Router, Routes } from "react-router-dom";
import TarefasList from "./components/listar-tarefas/TarefasList";

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}
interface TarefasListType{
  tarefas: TarefasType[]
  setTarefas:  React.Dispatch<React.SetStateAction<TarefasType[]>>
}

export default function ListarTarefas(){
    var api = "http://localhost:3000/todos/";

    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState<TarefasType[]>([])
    const [checked, setChecked] = useState(Boolean);
    const [animationLeft, setAnimationLeft] = useState<number>(-3);
    const [widthButton, setWidthButton] = useState<string>("36px");
    // Get Tarefas
    useEffect(() => {
      const getAll = async () => {
        await axios.get(api)
        .then((response) => setTarefas(response.data)
        )
        .catch((error) => console.log(error))
      }
      getAll();
    },[tarefa, tarefas])

    // Metodo para Excluirtodas tarefas Concluidas
    function ExcluirTodosConcluidos(){
        const iDTarefas = tarefas.filter((tarefa) => tarefa.isDone === true )
        iDTarefas.map((iDs) => {
            axios.delete(`${api}${iDs.id}`)
            .then(() => console.log(iDTarefas))
            .catch((error)=>console.log(error))
        })
    }

    // concluir todas as tarefas
    function ConcluirTudo(estado: boolean){
        tarefas.map((tarefa) => {
            axios.patch(`${api}${tarefa.id}`, {
                isDone: estado
            })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error) => console.log(error))
        })
    }

    // Adicionar tarefa
    function CriarTarefa(title: string){

        var id = Math.random().toString(36).substring(2);

        axios.post(api,{
            id,
            title,
            isDone: false
        })
        .then(()=> {
               setTarefas(tarefas)
        })
        .catch((error) => console.log(error))
    }

    // Tarefas a serem feitas
    const active = tarefas.filter((tarefa) => tarefa.isDone === false);
    // Tarefas Completas
    const completed = tarefas.filter((tarefa) => tarefa.isDone === true);
    return(
      <Router>
            <Titulo>Todos</Titulo>
        <Container>
            <ContainerList>
                <Input 
                placeholder="What needs to be done?"
                onChange={(text: React.ChangeEvent<HTMLInputElement>) =>{setTarefa(text.target.value)}}
                onKeyUp={
                    (e: React.KeyboardEvent) => {
                        if (e.key === 'Enter') {
                            CriarTarefa(tarefa)
                            
                    }}
                } 
                type="text"/>  
                {/*Botão para realiar tudo */}
                <CheckBoxContainer>
                    <LabelCheckbox htmlFor="togle" id={checked ? "checked" : ""} className="togle-label">
                        <Icon icon={faArrowDown}></Icon>
                    </LabelCheckbox>
                    <CheckAllButton className="togle" value="togle" id="togle" 
                    onClick={() => {
                            ConcluirTudo(checked)
                    }}
                    onChange={() => { 
                        setChecked(!checked)
                    }}
                    />
                </CheckBoxContainer>
              </ContainerList>

                {/* ROTAS */}
                  <Routes>
                    <Route path="/" element={<Tarefas tarefas={tarefas} setTarefas={setTarefas}/>}></Route>
                    <Route path="/active" element={<Tarefas tarefas={active} setTarefas={setTarefas}/>}></Route>
                    <Route path="/completed" element={<Tarefas tarefas={completed} setTarefas={setTarefas}/>}></Route>
                  </Routes>

                <ListMethods>
                  <CountItemsLeft>{active.length} item left!</CountItemsLeft>
                  <Methods>
                    <Link to='/'>
                      <ButtonsMehotds onClick={() => {
                        setAnimationLeft(-3)
                        setWidthButton("36px")
                        }}>All</ButtonsMehotds>
                    </Link>
                    <Link to='/active'>
                      <ButtonsMehotds onClick={() => {
                        setAnimationLeft(58)
                        setWidthButton("52px")
                      }}>Active</ButtonsMehotds>
                    </Link>
                    <Link to='/completed'>
                      <ButtonsMehotds
                      onClick={() => {
                        setAnimationLeft(136)
                        setWidthButton("82px")
                      }}>Completed</ButtonsMehotds>
                    </Link>
                    <AnimationButton width={widthButton} left={animationLeft}></AnimationButton>
                    <ButtonClear onClick={() => ExcluirTodosConcluidos()}>Clear Completed</ButtonClear>
                  </Methods>
                </ListMethods>
        </Container>
      </Router>
    );
}

const Tarefas = ({tarefas, setTarefas}: TarefasListType) => {
    return(
      <Ul>
        {
            tarefas.map((tarefa)=>(
              <TarefasList 
              tarefasID={tarefa.id}
              tarefaTitle={tarefa.title}
              tarefaIsDone={tarefa.isDone} 
              setTarefas={setTarefas}
              tarefas={tarefas}
              />
            ))
        }
      </Ul>
    )
}