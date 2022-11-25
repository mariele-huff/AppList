import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Checkbox from 'expo-checkbox'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

import { CustomButton } from '../Components/Button/button';
import { ThemeDark } from '../Styles/themeDark';
import { InputCusttom } from '../Components/Input/input';


export function ViewTarefas() {

    const [taskList, setTaskList] = useState<any>([])
    const [task, setTask] = useState('')


    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@tasklist')
                if (value !== null) {
                    setTaskList(JSON.parse(value));
                }
            } catch (e) {
                console.log('Erro:' + e)
            }
        }
        getData()


    }, [])


    const setData = async (data:any) => {
    await AsyncStorage.setItem('@tasklist', JSON.stringify(data)); 

    }


    const atualizaLista = async () => {

        if (task) {
            const newTask = {
                id: String(new Date().getTime()),
                name: task,
                done: false
            }

            const orderTask = [...taskList, newTask]
                .sort((a, b) => (a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)))

            setTaskList([...taskList, newTask])
            setTaskList(orderTask)
            setTask("")

            setData(orderTask)

        } else {
            Alert.alert('Ops', 'Tarefa não pode ser em branco');
        }
    }


    const deleteTesk = (id:number) => {
        Alert.alert('Atenção', 'Deseja mesmo excluir a tarefa?', [{
            text: "sim",

            onPress: async () => {
                const newList = [...taskList.filter((item) => item.id !== id)]
                setTaskList(newList)
                setData(newList);
            }

        },
        {
            text: "não",
            onPress: () => null
        }])

    }

   

    const handleCheckTask = async (id:number) => {


        const newTaskList = taskList.map(item => {
            if (item.id == id) {
                return { ...item, done: !item.done }
            }
            return item;
        })

        setTaskList(newTaskList);


        setData(newTaskList)

    }

    return (
        <View style={ThemeDark.container}>
             <Text
                style={ThemeDark.title}
                >
                    Tarefas
                </Text>

            <InputCusttom

                placeholder='Digite a tarefa'
                value={task}
                tamanho='large'
                onChangeText={(value) => setTask(value)} 
                type='email-address'            />

            <CustomButton
                tamanho='large'
                label='salvar'
                onPress={() => atualizaLista()} onLongPress={undefined}            />


            {
                taskList != null && taskList.length > 0 ?
                    taskList.map((item: any) => {

                        return (
                            <View
                                key={item.id}
                                style={ThemeDark.itemList}>
                                <Checkbox
                                    value={item.done}
                                    onValueChange={() => handleCheckTask(item.id)}
                                    color={item.done ? '#444' : '#fff'}
                                />
                                <Text style={[ThemeDark.itemText, { textDecorationLine: item.done ? 'line-through' : 'none' }]}
                                >
                                    {item.name}
                                </Text>
                               <View style={ThemeDark.actions}>
                                 <TouchableOpacity onPress={() => deleteTesk(item.id) }style={{marginRight:10}}>
                                <Feather name="edit" size={24} color="#fff"  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteTesk(item.id)}>
                                    <FontAwesome name="trash-o" size={24} color="#fff" />
                                </TouchableOpacity>
                                </View> 
                               

                            </View>
                        )
                    }) :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


                        <LottieView
                            autoPlay
                            loop={true}
                            style={{
                                width: 200,
                                height: 200,

                            }}

                            source={require('../Assets/animations/listaVazia.json')}
                        />

                        <Text style={{ color: '#fff'}}>A lista está vazia</Text>

                    </View>
                    }
        </View>
    );
}


