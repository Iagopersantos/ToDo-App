import { TouchableOpacity, Text } from "react-native";
import { style } from "./style";

type Props = {
    name: string
    onAdd: () => void;
}

export function Create_Button({name, onAdd}: Props) {

    return (
        <TouchableOpacity style={style.button} onPress={onAdd}>
            <Text style={style.buttonText}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}