import { View, Text, Image, FlatList, TextInput, ScrollView, Alert } from "react-native";
import { style } from "./style";
import { useState } from "react";
import { Divider } from "native-base";
import { Create_Button } from "../../components/create_button";
// import { Task_List } from "../../components/Tasks";

export function Home() {

    const [tasks, setTask] = useState<String[]>([])
    const [taskName, setTaskName] = useState('')

    function handleTaskAdd() {
        setTask(prevState => [...prevState, taskName])
        setTaskName('')

        console.log(tasks)
    }

    function handleTaskRemove(name: String) {
        Alert.alert('Remover', `Você deseja remover ${name}`, [
            {
                text: 'Sim',
                onPress: () => setTask(prevState => (prevState.filter(tasks => tasks !== name)))
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])
        console.log(tasks)
    }

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Image
                    style={style.image}
                    source={{ uri: 'https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png' }} />
                <View style={style.containerInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={'#FFF'}
                        onChangeText={e => setTaskName(e)}
                        value={taskName}
                    />
                    <Create_Button
                        name="+"
                        onAdd={handleTaskAdd}
                    />

                </View>
            </View>
            <View style={style.status}>
                <Text style={style.created}>
                    Criadas
                </Text>
                <Text style={style.completed}>
                    Concluídas
                </Text>
            </View>
            <Divider
                my="5"
                bg={'#333333'}
                margin={5}
                width={'90%'}
            />
            <ScrollView>
                {/* <Task_List
                    name="+"
                /> */}
            </ScrollView>
            {/* <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participants
                        key={item}
                        name={item}
                        onRemove={() => console.log()} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    () => (
                        <Text style={style.emptyParticipants}>
                            Nenhum participante chegou ao seu evento? Cadastre novos participantes...
                        </Text>
                    )
                }
            /> */}
        </View>
    )
}