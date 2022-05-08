import {
    ButtonGroup,
    Editable,
    EditableInput,
    EditablePreview,
    Flex, HStack,
    IconButton,
    Input,
    useEditableControls
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
import useConnection from "../hooks/useConnection";
import defaultNickname from "../../common/social/defaultNickname";
import {useEffect} from "react";
import TransportEvent from "../../common/state/transport/TransportEvent";

function EditableControls() {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls()
    return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
            <IconButton icon={<CheckIcon/>} {...getSubmitButtonProps()} aria-label="Edit"/>
            <IconButton icon={<CloseIcon/>} {...getCancelButtonProps()} aria-label="Close"/>
        </ButtonGroup>
    ) : (
        <Flex justifyContent='center'>
            <IconButton size='sm' icon={<EditIcon/>} {...getEditButtonProps()} aria-label="Edit"/>
        </Flex>
    )
}

export default function EditableNickname() {
    const io = useConnection();
    const existingNick = localStorage.getItem('nickname');

    function onChange(value: string) {
        io.emit(TransportEvent.SetNickname, value);
        localStorage.setItem('nickname', value);
    }

    useEffect(() => {
        if (existingNick) {
            io.emit(TransportEvent.SetNickname, existingNick);
        }
    }, []);

    return (
        <Editable
            defaultValue={existingNick || defaultNickname(io.id)}
            isPreviewFocusable={false}
            onSubmit={onChange}
        >
            <HStack>
                <EditablePreview/>
                <Input as={EditableInput}/>
                <EditableControls/>
            </HStack>
        </Editable>
    )
}
