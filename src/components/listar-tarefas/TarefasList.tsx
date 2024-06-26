import React, { useState } from 'react';
import { Li,LabelCheckList, CheckList, SpanCheckList, TextList, DeleteTarefa, InputEdicao} from '../../style'
import {faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}

interface TarefasListTypes{
    tarefasID: string
    tarefaTitle: string
    tarefaIsDone: boolean
    setTarefas:React.Dispatch<React.SetStateAction<TarefasType[]>>
    tarefas: TarefasType[]
}

function TarefasList({tarefasID, tarefaTitle, tarefaIsDone, setTarefas, tarefas }: TarefasListTypes){
    const [opacity, setOpacity] = useState(0);
    const [modoEdicao, setModoEdicao] = useState(false)
    const [novaTarefa, setNovaTarefa] = useState('')
    
    var api = "http://localhost:3000/todos/";

    function MudarEstadoTarefa(tarefaID: string, estado: boolean) {
        axios.patch(`${api}${tarefaID}`, {
            isDone: estado
        }).then(() => { 
            setTarefas(tarefas.map(tarefa => 
            tarefa.id === tarefaID ? { ...tarefa, isDone: estado } : tarefa
        ))
        }
        )
      }
  
    function DeletarTarefa(TarefaID: string){
        axios.delete(`${api}${TarefaID}`)
        .then(() => console.log('Tarefa Apagada!'))
        .catch((error) => console.log(error))
    }

    function EditarTarefa(tarefa: string){
        axios.patch(`${api}${tarefasID}`,{
            title: tarefa
        })
        .then(() => console.log('Tarefa Editada!'))
        .catch((error) => console.log(error))
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        setNovaTarefa(e.target.value)
    }

    return(
        <Li key={`tarefa-${tarefasID}`} id={`tarefa-${tarefasID}`} 
        onMouseEnter={()=> {setOpacity(1)}} 
        onMouseLeave={()=>setOpacity(0)}
        onDoubleClick={() => {
                setModoEdicao(!modoEdicao)
                setNovaTarefa(tarefaTitle)
            }
        }
        >
            {
                modoEdicao ? (
                    <InputEdicao
                        value={novaTarefa}
                        onChange={handleInputChange}
                        onKeyUp={
                            (e: React.KeyboardEvent) => {
                                if (e.key === 'Enter') {
                                    EditarTarefa(novaTarefa)
                                    setModoEdicao(!modoEdicao)
                            }}
                        } 
                    />
                ):( 
                <>    
                    <LabelCheckList key={tarefasID} id={tarefasID} htmlFor={`togle-list-${tarefasID}`} className="togle-list">
                        {
                            tarefaIsDone === false ? (
                                <CheckList className="togle-list" 
                                value={`togle-list-${tarefasID}`}
                                id={`togle-list-${tarefasID}`} 
                                onClick={()=>MudarEstadoTarefa(tarefasID, true)}/>
                            ): (
                                <SpanCheckList onClick={()=>MudarEstadoTarefa(tarefasID, false)} icon={faCircleCheck}/>
                            ) 
                        }
                    </LabelCheckList>

                        <TextList>
                            {tarefaTitle}
                        </TextList>
                    <DeleteTarefa onClick={() => DeletarTarefa(tarefasID)} values={`tarefa-${tarefasID}`} id={`tarefa-${tarefasID}`} opacity={opacity} icon={faXmark}>
                    </DeleteTarefa>
                </>    
            )}
        </Li>
    )
}

export default TarefasList;