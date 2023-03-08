var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, HStack, IconButton, Input, useEditableControls, } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import useConnection from '../hooks/useConnection';
import defaultNickname from '../../common/social/defaultNickname';
import { useEffect } from 'react';
import TransportEvent from '../../common/state/transport/TransportEvent';
function EditableControls() {
    var _a = useEditableControls(), isEditing = _a.isEditing, getSubmitButtonProps = _a.getSubmitButtonProps, getCancelButtonProps = _a.getCancelButtonProps, getEditButtonProps = _a.getEditButtonProps;
    return isEditing ? (_jsxs(ButtonGroup, __assign({ justifyContent: 'center', size: 'sm' }, { children: [_jsx(IconButton, __assign({ icon: _jsx(CheckIcon, {}) }, getSubmitButtonProps(), { "aria-label": "Edit" })), _jsx(IconButton, __assign({ icon: _jsx(CloseIcon, {}) }, getCancelButtonProps(), { "aria-label": "Close" }))] }))) : (_jsx(Flex, __assign({ justifyContent: 'center' }, { children: _jsx(IconButton, __assign({ size: 'sm', icon: _jsx(EditIcon, {}) }, getEditButtonProps(), { "aria-label": "Edit" })) })));
}
export default function EditableNickname() {
    var io = useConnection();
    var existingNick = localStorage.getItem('nickname');
    function onChange(value) {
        io.emit(TransportEvent.SetNickname, value);
        localStorage.setItem('nickname', value);
    }
    useEffect(function () {
        if (existingNick) {
            io.emit(TransportEvent.SetNickname, existingNick);
        }
    }, []);
    if (!io.id) {
        return (_jsx(_Fragment, { children: "Loading..." }));
    }
    return (_jsx(Editable, __assign({ defaultValue: existingNick || defaultNickname(io.id), isPreviewFocusable: false, onSubmit: onChange }, { children: _jsxs(HStack, { children: [_jsx(EditablePreview, {}), _jsx(Input, { as: EditableInput }), _jsx(EditableControls, {})] }) })));
}
//# sourceMappingURL=EditableNickname.js.map