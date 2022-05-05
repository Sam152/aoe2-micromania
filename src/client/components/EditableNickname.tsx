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
    return (
        <Editable
            defaultValue='Rasengan ⚡️'
            isPreviewFocusable={false}
        >
            <HStack>
                <EditablePreview/>
                <Input as={EditableInput}/>
                <EditableControls/>
            </HStack>
        </Editable>
    )
}
