import { View, TextInput } from "react-native";
import { style } from "./style";
import { Create_Button } from "../../components/create_button";
import { useState } from "react";

type Props = {
    onAdd: Function
}

export function Text_Input({onAdd}: Props) {


    return (
        <View style={style.conatiner}>
            <TextInput
                style={style.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={'#FFF'}
            />
            <Create_Button 
            name="+"
            onAdd={Function}
            />
            
        </View>
    )
}